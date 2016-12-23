using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;

namespace DAL
{
    public  class UserAppreciationDAL
    {
        static string conStr = "server=.;trusted_connection=true;DataBase = Appreciation";

        public static List<Model.UserDataModel> GetaUserDetail(string userName,string userId)
        {
            DataTable dt;
            using (SqlConnection con = new SqlConnection(conStr))
            {
                SqlCommand cmd = new SqlCommand();
                cmd.Connection = con;
                cmd.CommandType = CommandType.StoredProcedure;
                cmd.CommandText = "procSearchUser";
                cmd.Parameters.Add("@username", SqlDbType.VarChar).Value = userName;
                cmd.Parameters.Add("@employeeId", SqlDbType.VarChar).Value = userId;

                con.Open();
                SqlDataAdapter da = new SqlDataAdapter(cmd);

                dt = new DataTable();
                da.Fill(dt);

            }

            List<Model.UserDataModel> employeeList = dt.DataTableToList<Model.UserDataModel>();
            return employeeList;
        }

        public static Int32 SaveEarnedPoints(Model.EarnedPoint objEarnedPoints)
        {
            using (SqlConnection con = new SqlConnection(conStr))
            {
                SqlCommand cmd = new SqlCommand();
                cmd.Connection = con;
                cmd.CommandType = CommandType.StoredProcedure;
                cmd.CommandText = "procSaveEarnedPoints";
                cmd.Parameters.Add("@FromEmpId", SqlDbType.VarChar).Value = objEarnedPoints.FromEmployeeId;
                cmd.Parameters.Add("@ToEmpId", SqlDbType.VarChar).Value = objEarnedPoints.ToEmployeeId;
                cmd.Parameters.Add("@Points", SqlDbType.VarChar).Value = objEarnedPoints.Points;

                con.Open();
                return cmd.ExecuteNonQuery();


            }
        }

    
    }
}
