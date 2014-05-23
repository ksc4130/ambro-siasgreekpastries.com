using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Security.Cryptography.X509Certificates;
using System.Threading;
using System.Web.Http;
using Ambro.Models;
using MongoDB.Driver;

namespace Ambro.Controllers
{
    public class ProductsController : ApiController
    {
        private MongoClient _client = new MongoClient(Globals.ConnStr);
        private MongoServer _server;
        private MongoDatabase _database;
        private MongoCollection<Product> _products;

        public ProductsController()
        {
            _server = _client.GetServer();
            _database = _server.GetDatabase(Globals.DatabaseName);
            _products = _database.GetCollection<Product>("products");
        }

        // GET api/<controller>
        public IEnumerable<Product> Get()
        {
            return _products.FindAll();
        }

        // GET api/<controller>/5
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<controller>
        public void Post(Product product)
        {
            _products.Save(product);
        }

        // PUT api/<controller>/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/<controller>/5
        public void Delete(int id)
        {
        }
    }
}