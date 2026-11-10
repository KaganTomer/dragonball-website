using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace Dragonball_final.pages.mainPages
{
    public partial class Gallery : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            if ((bool)Session["logged"] == false)
            {
                Response.Redirect("~/pages/mainPages/NoAccessUser.aspx");
            }
        }
    }
}