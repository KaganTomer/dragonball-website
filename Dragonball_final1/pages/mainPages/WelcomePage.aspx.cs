using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace Dragonball_final1.pages.mainPages
{
    public partial class WelcomePage : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            if (Session["Username"] != null)
            {
                visitorName.InnerHtml = $"<span>{Session["Username"].ToString()}</span>";
            }
            else
            {
                visitorName.InnerHtml = "<span>Guest</span>";
            }
        }
    }
}