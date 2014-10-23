using System.Web.Http;
using Newtonsoft.Json.Serialization;

namespace Ambro.App_Start
{
    public class AmbroConfig
    {
        public static void InitConfig()
        {
            var config = GlobalConfiguration.Configuration;
            config.Formatters.JsonFormatter.SerializerSettings.ContractResolver =
            new CamelCasePropertyNamesContractResolver();
        }
    }
}