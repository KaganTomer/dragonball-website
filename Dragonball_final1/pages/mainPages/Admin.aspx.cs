using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Data;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Web.UI.HtmlControls;

namespace Dragonball_final1.pages.mainPages
{
    public partial class Admin : System.Web.UI.Page
    {
        private const string ConnectionString = @"Data Source=(LocalDB)\MSSQLLocalDB;AttachDbFilename=|DataDirectory|\Database1.mdf;Integrated Security=True";

        protected void Page_Load(object sender, EventArgs e)
        {
            if ((bool)Session["Admin"] != true)
            {
                Response.Redirect("~/pages/mainPages/NoAccess.aspx");

            }

            string sql = "SELECT * FROM UserTable ORDER BY UserId ASC";
            DataSet ds = Helper.RetrieveTable(sql);
            DataTable dt = ds.Tables[0];
            string table = Helper.BuildUsersTable(dt);
            tableDiv.InnerHtml = table;
        }
    }
}