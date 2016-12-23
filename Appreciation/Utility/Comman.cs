using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data.Sql;
using System.Data.SqlClient;

namespace Appreciation.Utility
{
    public class Comman
    {
       
        public static Int32 ExecuteNonQuery(string procedure)
        {
            try
            {
                string conStr = "server=.;trusted_connection=true;DataBase = Appreciation";
                SqlConnection sqlCon = new SqlConnection(conStr);
                sqlCon.Open();
                SqlCommand sqlCmd = new SqlCommand();
                sqlCmd.Connection = sqlCon;
                sqlCmd.CommandType = System.Data.CommandType.StoredProcedure;
                sqlCmd.CommandText = procedure;
                return sqlCmd.ExecuteNonQuery();
            }
            catch (Exception ex)
            {
                throw ex;
            }

        }
    }
}