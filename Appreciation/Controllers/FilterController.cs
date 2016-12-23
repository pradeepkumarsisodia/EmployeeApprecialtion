using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Routing;

namespace Appreciation.Controllers
{
    public class FilterController : ActionFilterAttribute
    {
        public override void OnActionExecuting(ActionExecutingContext filterContext)
        {
            string controllerName = filterContext.ActionDescriptor.ControllerDescriptor.ControllerName.ToLower();
            HttpSessionStateBase session = filterContext.HttpContext.Session;
            if (session["EmployeeId"] == null)
            {
                //Redirect
                var url = new UrlHelper(filterContext.RequestContext);
                var loginUrl = url.Content("~/Account/login");
                filterContext.HttpContext.Response.Redirect(loginUrl, true);
            }
        }

       

       


        //private void Log(string methodName, RouteData routeData)
        //{
        //    var controllerName = routeData.Values["controller"];
        //    var actionName = routeData.Values["action"];
        //    var message = String.Format("{0} controller:{1} action:{2}", methodName, controllerName, actionName);
        //    Debug.WriteLine(message, "Action Filter Log");
        //}
    }
}