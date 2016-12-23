using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Model;


namespace DAL
{
    public class Login
    {
        static string conStr = "server=.;trusted_connection=true;DataBase = Appreciation";

        public static Int32 loginUser(LoginModel objlogin)
        {
            using (SqlConnection con = new SqlConnection(conStr))
            {
                SqlCommand cmd = new SqlCommand();
                cmd.Connection = con;
                cmd.CommandType = CommandType.StoredProcedure;
                cmd.CommandText = "procLogin";
                cmd.Parameters.Add("@EmailId", SqlDbType.VarChar).Value = objlogin.Email;
                cmd.Parameters.Add("@PhoneNumber", SqlDbType.VarChar).Value = "";
                cmd.Parameters.Add("@password", SqlDbType.VarChar).Value = objlogin.Password;
                cmd.Parameters.Add("@type", SqlDbType.VarChar).Value = "S";

                con.Open();
                return (int)cmd.ExecuteScalar();


            }
        }

        public static Int32 RegisterUser(RigesterModel objregister)
        {
            using (SqlConnection con = new SqlConnection(conStr))
            {
                SqlCommand cmd = new SqlCommand();
                cmd.Connection = con;
                cmd.CommandType = CommandType.StoredProcedure;
                cmd.CommandText = "procLogin";
                cmd.Parameters.Add("@EmailId", SqlDbType.VarChar).Value = objregister.Email;
                cmd.Parameters.Add("@PhoneNumber", SqlDbType.VarChar).Value = objregister.MobileNumber;
                cmd.Parameters.Add("@password", SqlDbType.VarChar).Value = objregister.Password;
                cmd.Parameters.Add("@EmployeeCode", SqlDbType.VarChar).Value = objregister.EmployeeCode;
                cmd.Parameters.Add("@FirstName", SqlDbType.VarChar).Value = objregister.FirstName;
                cmd.Parameters.Add("@LastName", SqlDbType.VarChar).Value = objregister.LastName;
                cmd.Parameters.Add("@ImagePath", SqlDbType.VarChar).Value = objregister.FilePath;
                cmd.Parameters.Add("@type", SqlDbType.VarChar).Value = "I";

                con.Open();
                return cmd.ExecuteNonQuery();


            }
        }
    }
}
