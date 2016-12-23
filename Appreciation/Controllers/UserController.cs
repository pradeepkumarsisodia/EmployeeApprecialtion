using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Appreciation.Controllers
{
    [FilterController]
    public class UserController : Controller
    {

        // GET: User
        public ActionResult Index()
        {

            return View();
        }

        public ActionResult GiveAppreciation()
        {
            return View();
        }


        public JsonResult GetUserDetail(string userName)
        {
            List<Model.UserDataModel> objuserData = null;
            try
            {
                objuserData = BAL.UserAppreciationBAL.GetaUserDetail(userName, Convert.ToString(Session["EmployeeId"]));
            }
            catch (Exception ex)
            {
                return Json(new { ErrorMessage = ex.Message.ToString() }, JsonRequestBehavior.AllowGet);
            }

            return Json(new {data = objuserData, SuccessMessage = "" } , JsonRequestBehavior.AllowGet);
        }

        public JsonResult GetReport()
        {
            List<Model.Report> objreport = null;
            try
            {
                objreport = BAL.UserAppreciationBAL.GetReport(Convert.ToString(Session["EmployeeId"]));
            }
            catch (Exception ex)
            {
                return Json(new { ErrorMessage = ex.Message.ToString() }, JsonRequestBehavior.AllowGet);
            }

            return Json(new { data = objreport, SuccessMessage = "" }, JsonRequestBehavior.AllowGet);
        }


        [HttpPost]
        public JsonResult SaveEarnedPoints(Model.EarnedPoint objEarnedPoints)
        {
            string Messages = string.Empty;
            try
            {
                Int32 rowEffected = BAL.UserAppreciationBAL.SaveEarnedPoints(objEarnedPoints);
                if (rowEffected > 0)
                {
                    Messages = "Data Saved";
                }
            }
            catch (Exception ex)
            {
                return Json(new { ErrorMessage = ex.Message.ToString() }, JsonRequestBehavior.AllowGet);
            }
            return Json(new { SuccessMessage = Messages }, JsonRequestBehavior.AllowGet);
        }

        public ActionResult LogOff()
        {
            Session.Abandon();
            Session.Clear();
            return RedirectToAction("Index", "Home");
        }
    }
}