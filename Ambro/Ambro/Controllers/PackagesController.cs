using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Ambro.Models;
using MongoDB.Bson;
using MongoDB.Driver;

namespace Ambro.Controllers
{
    public class PackagesController : ApiController
    {
        private MongoClient _client = new MongoClient(Globals.ConnStr);
        private MongoServer _server;
        private MongoDatabase _database;
        private MongoCollection<Package> _packages;

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

        public IHttpActionResult Get(string id)
        {
            return Ok(_packages.FindOneById(new ObjectId(id)));
        }

        public IHttpActionResult Post(Package package)
        {
            _packages.Save(package);

            var uri = Url.Link("~/api/package", new {id = package.Id});

            return Created(uri, package);
        }
    }
}
