using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Model
{
  public class EarnedPoint
    {

        public String FromEmployeeId { get; set; }
        public string ToEmployeeId { get; set; }
        public double Points { get; set; }
        public string IsRedeemed { get; set; }
        public string Reason { get; set; }
    }
}
