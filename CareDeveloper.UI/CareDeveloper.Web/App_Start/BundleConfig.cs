using System.Web;
using System.Web.Optimization;

namespace CareDeveloper.Web
{
    public class BundleConfig
    {
        // For more information on bundling, visit http://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            //css 
            bundles.Add(new StyleBundle("~/Content/css").Include(
                "~/Content/css/cosmo/bootstrap.css",
                "~/Content/font-awesome.css",
                "~/Content/css/cosmo/site.css"
            ));
        }
    }
}
