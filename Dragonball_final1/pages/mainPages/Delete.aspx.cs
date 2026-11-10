using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace Dragonball_final1.pages.mainPages
{
    public partial class Delete : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            if (Session["Email"] != null)
            {
                string email = Session["Email"].ToString();
                string sql = "DELETE FROM UserTable WHERE Email = @Email";
                Helper.ExecuteNonQuery(sql, new SqlParameter("@Email", email));
                Session.Abandon();
                Response.Redirect("Default.aspx");
            }
        }
    }
}