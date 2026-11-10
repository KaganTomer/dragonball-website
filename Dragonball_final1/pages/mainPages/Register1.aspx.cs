using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Runtime.Remoting.Messaging;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace Dragonball_final1.pages.mainPages
{
    public partial class Register1 : System.Web.UI.Page
    {
        private const string ConnectionString = @"Data Source=(LocalDB)\MSSQLLocalDB;AttachDbFilename=|DataDirectory|\Database1.mdf;Integrated Security=True";

        protected void Page_Load(object sender, EventArgs e)
        {
            if ((bool)Session["logged"] == true && (String)Session["Email"] != "admin@admin.com")
            {
                Response.Redirect("NoAccessAlready.aspx");
            }


            if (IsPostBack)
            {
                string username = Request.Form["username"];
                string email = Request.Form["email"];
                string password = Request.Form["password"];
                string firstname = Request.Form["firstName"];
                string lastname = Request.Form["lastName"];
                string phone = Request.Form["phoneNumber"];
                string IdNumber = Request.Form["IdNumber"];
                string gender = Request.Form["gender"];
                string birthdate = Request.Form["birthdate"];
                string city = Request.Form["city"];
                string race = Request.Form["race"];


                string checkEmailSQL = "SELECT COUNT(*) FROM UserTable WHERE Email = @Email";
                int existingEmailCount = Convert.ToInt32(
                    Helper.GetScalar(checkEmailSQL, new SqlParameter("@Email", email)));

                if (existingEmailCount > 0)
                {
                    emailMsg.InnerHtml = "Email Already Taken";
                }
                else
                {
                    bool admin = false;

                    emailMsg.InnerHtml = "";
                    User user = new User
                    {
                        firstname = firstname,
                        lastname = lastname,
                        username = username,
                        password = password,
                        Admin = admin,
                        birthdate = birthdate,
                        email = email,
                        idNumber = IdNumber,
                        phone = phone,
                        gender = gender,
                        city = city,
                        race = race
                    };
                    Helper.Insert(user);
                    Response.Redirect("Login.aspx");
                }
            }

        }
    }
}
