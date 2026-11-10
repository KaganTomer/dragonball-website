using Dragonball_final1;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data.SqlClient;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Xml.Linq;

namespace Dragonball_final.pages.mainPages
{
    public partial class Login : System.Web.UI.Page
    {
        private const string ConnectionString = @"Data Source=(LocalDB)\MSSQLLocalDB;AttachDbFilename=|DataDirectory|\Database1.mdf;Integrated Security=True";

        protected void Page_Load(object sender, EventArgs e)
        {
            if ((bool)Session["logged"] == true && (String)Session["Email"] != "admin@admin.com")
            {
                Response.Redirect("NoAccessAlready.aspx");
            }
            // Process form submission only on postback

            if (IsPostBack)
            {
                string email = Request.Form["inEmail"];
                string password = Request.Form["inPassword"];

                User logged = Helper.GetRow(email, password);
                if (logged != null) 
                {
                    Application.Lock();
                    Application["ActiveUsers"] = (int)Application["ActiveUsers"] + 1;
                    Application.UnLock();

                    Session["logged"] = true;
                    Session["Username"] = logged.username;
                    Session["Email"] = logged.email;
                    Session["Admin"] = logged.Admin;
                    Session["UserId"] = logged.UserId;

                    passMsg.InnerHtml = "";

                    Response.Redirect("WelcomePage.aspx");
                }
                else
                {
                    passMsg.InnerHtml = "Incorrect Email or Password";
                } 
            }
        }
    }
}