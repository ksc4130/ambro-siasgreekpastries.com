using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Security.Cryptography.X509Certificates;
using System.Threading;
using System.Web.Http;
using Ambro.Models;
using Mere;

namespace Ambro.Controllers
{
    public class ProductsController : ApiController
    {
        [HttpGet]
        [Route("api/products/getCategories")]
        public IHttpActionResult GetCategories()
        {
            return Ok(MereQuery.Create<Category>().ExecuteToList());
        }

        [HttpGet]
        [Route("api/products/getProducts")]
        public IHttpActionResult GetProducts()
        {
            var found = MereQuery.Create<Product>().ExecuteToList(); ;
            return Ok(found);
        }

        // GET api/<controller>
//        public IHttpActionResult Get()
//        {
//            return Ok(_packages.FindAll().Where(x => string.Compare(x.Product.Category.CategoryName, "pastries", StringComparison.OrdinalIgnoreCase) == 0));
//        }

        // GET api/<controller>/5
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<controller>
        public void Post(Product product)
        {
            product.MereSave();
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