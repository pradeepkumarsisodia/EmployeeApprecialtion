using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Model
{
    public class RigesterModel
    {
        public string Email { get; set; }
        public string MobileNumber { get; set; }
        public string Password { get; set; }
        public string FilePath { get; set; }
        public string EmployeeCode { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
      
    }
    public class LoginModel
    {
        public string Email { get; set; }
        public string Password { get; set; }
    }
   
}
