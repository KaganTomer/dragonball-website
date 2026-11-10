using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Data;
using System.Linq;
using System.Web;
using System.Security.Policy;

namespace Dragonball_final1
{
    public class User
    {
        public int UserId;
        public string firstname;
        public string lastname;
        public string username;
        public string password;
        public bool Admin;
        public string birthdate;
        public string email;
        public string idNumber;
        public string phone;
        public string gender;
        public string race;
        public string city;

        public User()
        {
            UserId = -1;
            firstname = "";
            lastname = "";
            username = "";
            password = "";
            Admin = false;
            birthdate = "";
            email = "";
            idNumber = "";
            phone = "";
            gender = "";
            city = "";
            race = "";
        }
    }
}