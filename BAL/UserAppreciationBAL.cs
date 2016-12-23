using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BAL
{
  public  class UserAppreciationBAL
    {
      public static List<Model.UserDataModel> GetaUserDetail(string userName,string userId)
      {
          return DAL.UserAppreciationDAL.GetaUserDetail(userName, userId);
      }

      public static Int32 SaveEarnedPoints(Model.EarnedPoint objEarnedPoints)
      {
          return DAL.UserAppreciationDAL.SaveEarnedPoints(objEarnedPoints);
      }
    }
}
