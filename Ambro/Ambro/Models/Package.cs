using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace Ambro.Models
{
    public class Package
    {
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }
        public string PackageName { get; set; }
        public string ImgUrl { get; set; }
//        public int PackageTypeId { get; set; }
        public decimal Price { get; set; }
        public decimal CostPrice { get; set; }
        public int PackQuantity { get; set; }
        public decimal NetWeightPounds { get; set; }
        public string ContainerSize { get; set; }
        public string ContainerDescription { get; set; }
        public string Size { get; set; }
        public string PieceSize { get; set; }
        public Product Product { get; set; }
    }
}