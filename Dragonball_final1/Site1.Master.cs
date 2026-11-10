using Dragonball_final1.pages.mainPages;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace Dragonball_final
{
    public partial class Site1 : System.Web.UI.MasterPage
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            if (Session["logged"] != null && (bool)Session["logged"] == true)
            {
                btnUser.InnerText = Session["Username"].ToString(); // Ensure case matches
                btnUser.Style["display"] = "block";
                dropdown_user.Style["display"] = "block";
                btnLogIn.Style["display"] = "none";
                if ((bool)Session["Admin"] == true)
                {
                    admin_page_btn.Style["display"] = "block";
                    btnDelete.Style["display"] = "none";
                }
                charr.Style["display"] = "block";
                quiz.Style["display"] = "block";
                gall.Style["display"] = "block";
                ballImg3.Style["display"] = "block";
                ballImg4.Style["display"] = "block";
                ballImg5.Style["display"] = "block";
            }
            else 
            {
                btnUser.Style["display"] = "none";
                dropdown_user.Style["display"] = "none";
                btnLogIn.Style["display"] = "block";

                charr.Style["display"] = "none";
                quiz.Style["display"] = "none";
                gall.Style["display"] = "none";
                ballImg3.Style["display"] = "none";
                ballImg4.Style["display"] = "none";
                ballImg5.Style["display"] = "none";
                ballImg.Style["top"] = "47.5%";
                ballImg2.Style["top"] = "73.5%";
            }
        }
    }
}