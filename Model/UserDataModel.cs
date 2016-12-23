using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Model
{
    public class UserDataModel
    {
        public int EmployeeId { get; set; }
        public string UserName { get; set; }
        public string PhotoUrl { get; set; }

    }
    public class Report 
    {
        public string  EmployeeName { get; set; }
        public string TotalPoints { get; set; }
        public string TodayPoints { get; set; }
        public string LastSevenDaysPoints { get; set; }
        public string LastOneMonthPoint { get; set; }
    }
}
