﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Routing;

namespace CareDeveloper.Web
{
    public class RouteConfig
    {
        public static void RegisterRoutes(RouteCollection routes)
        {
            routes.IgnoreRoute("{resource}.axd/{*pathInfo}");

            routes.MapRoute(
                  name: "AngularJSApplication",
                  url: "{*url}",
                  defaults: new { controller = "Home", action = "Index" },
                  namespaces: null);
        }
    }
}
