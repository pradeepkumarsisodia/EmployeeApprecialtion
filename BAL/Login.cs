using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Model;



namespace BAL
{
    public class Login
    {
        public static Int32 loginUser(LoginModel objlogin)
        {
            return DAL.Login.loginUser(objlogin);
        }
        public static Int32 RegisterUser(RigesterModel objregister)
        {
            return DAL.Login.RegisterUser(objregister);
        }
    }
}
