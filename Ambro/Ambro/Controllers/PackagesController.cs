using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web;
using System.Web.Http;
using Ambro.Models;
using MongoDB.Bson;
using MongoDB.Driver;
using Newtonsoft.Json;

namespace Ambro.Controllers
{
    public class PackagesController : ApiController
    {
        private MongoClient _client = new MongoClient(Globals.ConnStr);
        private MongoServer _server;
        private MongoDatabase _database;
        private MongoCollection<Package> _packages;
        private const string UploadFolder = "/Content/img/packages";

        public PackagesController()
        {
            _server = _client.GetServer();
            _database = _server.GetDatabase(Globals.DatabaseName);
            _packages = _database.GetCollection<Package>("packages");
        }

        public IHttpActionResult Get()
        {
            return Ok(_packages.FindAll());
        }

        public IHttpActionResult Get(string packageId)
        {
            return Ok(_packages.FindOneById(new ObjectId(packageId)));
        }

        public async Task<IHttpActionResult> Post()
        {
            if (!Request.Content.IsMimeMultipartContent())
            {
                this.Request.CreateResponse(HttpStatusCode.UnsupportedMediaType);
            }

            var provider = GetMultipartProvider();
            var result = await Request.Content.ReadAsMultipartAsync(provider);

            // On upload, files are given a generic name like "BodyPart_26d6abe1-3ae1-416a-9429-b35f15e6e5d5"
            // so this is how you can get the original file name
            var originalFileName = GetDeserializedFileName(result.FileData.First());

            var ext = originalFileName.Split('.').Last();

            // uploadedFileInfo object will give you some additional stuff like file length,
            // creation time, directory name, a few filesystem methods etc..
            var uploadedFileInfo = new FileInfo(result.FileData.First().LocalFileName);

            var root = HttpContext.Current.Server.MapPath(UploadFolder);
            var filePath = root + "\\" + originalFileName;

            var package = JsonConvert.DeserializeObject<Package>(result.FormData["newPackage"]);
            package.ImgUrl = UploadFolder + "/" + originalFileName;

            if(File.Exists(filePath))
                File.Delete(filePath);

            uploadedFileInfo.MoveTo(filePath);

            _packages.Save(package);

            var uri = Url.Link("~/api/package", new {id = package.Id});

            return Created(uri, package);
        }

        // You could extract these two private methods to a separate utility class since
        // they do not really belong to a controller class but that is up to you
        private MultipartFormDataStreamProvider GetMultipartProvider()
        {
            // IMPORTANT: replace "(tilde)" with the real tilde character
            // (our editor doesn't allow it, so I just wrote "(tilde)" instead)
            var root = HttpContext.Current.Server.MapPath(UploadFolder);
            Directory.CreateDirectory(root);
            return new MultipartFormDataStreamProvider(root);
        }

        // Extracts Request FormatData as a strongly typed model
        private object GetFormData<T>(MultipartFormDataStreamProvider result)
        {
            if (result.FormData.HasKeys())
            {
                var unescapedFormData = Uri.UnescapeDataString(result.FormData
                    .GetValues(0).FirstOrDefault() ?? String.Empty);
                if (!String.IsNullOrEmpty(unescapedFormData))
                    return JsonConvert.DeserializeObject<T>(unescapedFormData);
            }

            return null;
        }

        private string GetDeserializedFileName(MultipartFileData fileData)
        {
            var fileName = GetFileName(fileData);
            return JsonConvert.DeserializeObject(fileName).ToString();
        }

        private string GetFileName(MultipartFileData fileData)
        {
            return fileData.Headers.ContentDisposition.FileName;
        }
    }
}
