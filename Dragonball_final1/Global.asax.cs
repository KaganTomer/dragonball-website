using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Security;
using System.Web.SessionState;

namespace Dragonball_final1
{
    public class Global : System.Web.HttpApplication
    {

        protected void Application_Start(object sender, EventArgs e)
        {
            Application["ActiveUsers"] = 0;
            Application["AllTimeUsers"] = 0;
        }

        protected void Session_Start(object sender, EventArgs e)
        {
            Session.Timeout = 1;

            Session["Username"] = null;
            Session["Email"] = null;
            Session["logged"] = false;
            Session["Admin"] = false;
            Session["UserId"] = null;

            Application.Lock();
            Application["AllTimeUsers"] = (int)Application["AllTimeUsers"] + 1;
            Application.UnLock();

        }

        protected void Application_BeginRequest(object sender, EventArgs e)
        {

        }

        protected void Application_AuthenticateRequest(object sender, EventArgs e)
        {

        }

        protected void Application_Error(object sender, EventArgs e)
        {

        }

        protected void Session_End(object sender, EventArgs e)
        {
            if ((bool)Session["logged"] == true)
            {
                Application.Lock();
                Application["ActiveUsers"] = (int)Application["ActiveUsers"] - 1;
                Application.UnLock();
            }

            Session["Username"] = null;
            Session["Email"] = null;
            Session["logged"] = false;
            Session["Admin"] = false;
            Session["UserId"] = null;
        }

        protected void Application_End(object sender, EventArgs e)
        {

        }
    }
}