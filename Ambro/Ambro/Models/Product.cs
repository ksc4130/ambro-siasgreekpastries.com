using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace Ambro.Models
{
    public class Product
    {
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }

        public string ProductName { get; set; }
        public string ProductDescription { get; set; }
        public string Ingredients { get; set; }
        public string SubTitle { get; set; }
        public Category Category { get; set; }
    }
}