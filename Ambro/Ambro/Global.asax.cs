using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using System.Web.Mvc;
using System.Web.Optimization;
using System.Web.Routing;
using Ambro.App_Start;
using Mere;

namespace Ambro
{
    public class WebApiApplication : System.Web.HttpApplication
    {
        protected void Application_Start()
        {
            var mds = MereDataSource.Create("localhost", "ambro", "sa", "Lala!!4130");

//            var mds = MereDataSource.Create("54.165.157.218", "ambro", "sa", "Lala!!4130");
            MereUtils.GlobalDataSource = mds;

            AmbroConfig.InitConfig();

            AreaRegistration.RegisterAllAreas();
            GlobalConfiguration.Configure(WebApiConfig.Register);
            FilterConfig.RegisterGlobalFilters(GlobalFilters.Filters);
            RouteConfig.RegisterRoutes(RouteTable.Routes);
            BundleConfig.RegisterBundles(BundleTable.Bundles);
        }
    }
}
