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
using Mere;
using Newtonsoft.Json;

namespace Ambro.Controllers
{
    public class PackagesController : ApiController
    {
        private const string UploadFolder = "/Content/img/packages";

        public IHttpActionResult Get()
        {
            return Ok(MereQuery.Create<Package>().ExecuteToList());
        }

        [Route("api/packages/getPastries")]
        public IHttpActionResult GetPasties()
        {
            return Ok(GetPackagesByCategoryName("pastry"));
        }

        [Route("api/packages/getCookies")]
        public IHttpActionResult GetCookies()
        {
            return Ok(GetPackagesByCategoryName("cookie"));
        }

        [Route("api/packages/getAssortments")]
        public IHttpActionResult GetAssortments()
        {
            return Ok(GetPackagesByCategoryName("assortment"));
        }
        [Route("api/packages/getSeasonal")]
        public IHttpActionResult GetSeasonal()
        {
            return Ok(GetPackagesByCategoryName("seasonal"));
        }
        public IHttpActionResult Get(int packageId)
        {
            var package = MereQuery.Create<Package>()
                .Where(x => x.PackageId).EqualTo(packageId)
                .ExecuteFirstOrDefault();

            package.Product = MereQuery.Create<Product>()
                .Where(x => x.ProductId).EqualTo(package.ProductId)
                .ExecuteFirstOrDefault();

            return Ok(package);
        }

        public async Task<IHttpActionResult> Post()
        {
            if (!Request.Content.IsMimeMultipartContent())
            {
                Request.CreateResponse(HttpStatusCode.UnsupportedMediaType);
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

            package.MereSave();

            //var uri = Url.Link("~/api/packages", new { packageId = package.Id });

            return Ok();
        }

        private IList<Package> GetPackagesByCategoryName(string catName)
        {
            var cat = MereQuery.Create<Category>()
                .Where(x => x.CategoryName).StartsWith(catName)
                .ExecuteFirstOrDefault();

            var products = MereQuery.Create<Product>().ExecuteToList();

            var packages = GetPackages();

            var toReturn = packages
                .Where(x => x.CategoryId == cat.CategoryId).ToList();

            toReturn.ForEach(x => x.Product = products.FirstOrDefault(p => p.ProductId == x.ProductId));

            return toReturn;
        }

        private IList<Package> GetPackages()
        {
            var products = MereQuery.Create<Product>().ExecuteToList();
            return
                MereQuery.Create<Package>().Execute().Select(x =>
                {
                    x.Product = products.FirstOrDefault(p => p.ProductId == x.ProductId);
                    return x;
                }).ToList();
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
