using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;

namespace CareDeveloper.Web
{
    public static class WebApiConfig
    {
        public static void Register(HttpConfiguration config)
        {
            //Site: CodeHelper START

            // Controller Only
            // To handle routes like `/api/codehelper/VTRouting`
            config.Routes.MapHttpRoute(
                name: "CodeHelperControllerOnly",
                routeTemplate: "api/codehelper/{controller}"
            );

            // Controller with ID
            // To handle routes like `/api/codehelper/VTRouting/1`
            config.Routes.MapHttpRoute(
                name: "CodeHelperControllerAndId",
                routeTemplate: "api/codehelper/{controller}/{id}",
                defaults: null,
                constraints: new { id = @"^\d+$" } // Only integers 
            );

            // Controllers with Actions
            // To handle routes like `/api/codehelper/VTRouting/route`
            config.Routes.MapHttpRoute(
                name: "CodeHelperControllerAndAction",
                routeTemplate: "api/codehelper/{controller}/{action}"
            );

            //Site: CodeHelper ENDS --//

            //Site: Main START

            // Controller Only
            // To handle routes like `/api/VTRouting`
            config.Routes.MapHttpRoute(
                name: "ControllerOnly",
                routeTemplate: "api/{controller}"
            );

            // Controller with ID
            // To handle routes like `/api/VTRouting/1`
            config.Routes.MapHttpRoute(
                name: "ControllerAndId",
                routeTemplate: "api/{controller}/{id}",
                defaults: null,
                constraints: new { id = @"^\d+$" } // Only integers 
            );

            // Controllers with Actions
            // To handle routes like `/api/VTRouting/route`
            config.Routes.MapHttpRoute(
                name: "ControllerAndAction",
                routeTemplate: "api/{controller}/{action}"
            );

            //Site: Main ENDS --//
        }
    }
}
