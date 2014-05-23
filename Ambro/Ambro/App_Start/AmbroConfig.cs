using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using MongoDB.Bson.Serialization;
using MongoDB.Bson.Serialization.Conventions;
using Newtonsoft.Json.Serialization;

namespace Ambro.App_Start
{
    public class AmbroConfig
    {
        public static void InitConfig()
        {
            var conventions = new ConventionProfile();
            conventions.SetElementNameConvention(new CamelCaseElementNameConvention());

            BsonClassMap.RegisterConventions(conventions, t => true);

            var config = GlobalConfiguration.Configuration;
            config.Formatters.JsonFormatter.SerializerSettings.ContractResolver =
            new CamelCasePropertyNamesContractResolver();
        }
    }
}