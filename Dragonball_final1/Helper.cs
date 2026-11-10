using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Data;
using System.Linq;
using System.Web;

namespace Dragonball_final1
{
    public class Helper
    {
        public const string DBName = "Database.mdf";
        public const string tblName = "UserTable";
        public const string conString = @"Data Source=(LocalDB)\MSSQLLocalDB;AttachDbFilename=|DataDirectory|\Database1.mdf;Integrated Security=True";

        public static DataSet RetrieveTable(string SQLStr)
        {
            SqlConnection con = new SqlConnection(conString);
            SqlCommand cmd = new SqlCommand(SQLStr, con);
            SqlDataAdapter ad = new SqlDataAdapter(cmd);
            DataSet ds = new DataSet();
            ad.Fill(ds, tblName);
            return ds;
        }

        // Executes a SQL query that returns a single value (e.g., COUNT, MAX) and returns it as an object.
        public static object GetScalar(string SQL)
        {
            SqlConnection con = new SqlConnection(conString);
            SqlCommand cmd = new SqlCommand(SQL, con);
            con.Open();
            object scalar = cmd.ExecuteScalar();
            con.Close();
            return scalar;
        }
        // Executes a parameterized query that returns a single value
        public static object GetScalar(string SQL, params SqlParameter[] parameters)
        {
            using (SqlConnection con = new SqlConnection(conString))
            using (SqlCommand cmd = new SqlCommand(SQL, con))
            {
                cmd.Parameters.AddRange(parameters);
                con.Open();
                return cmd.ExecuteScalar();
            }
        }
        // Executes a SQL command that does not return any data (e.g., INSERT, UPDATE, DELETE) and returns the number of affected rows.
        public static int ExecuteNonQuery(string SQL)
        {
            SqlConnection con = new SqlConnection(conString);
            SqlCommand cmd = new SqlCommand(SQL, con);
            con.Open();
            int n = cmd.ExecuteNonQuery();
            con.Close();
            return n;
        }
        public static int ExecuteNonQuery(string SQL, params SqlParameter[] parameters)
        {
            using (SqlConnection con = new SqlConnection(conString))
            using (SqlCommand cmd = new SqlCommand(SQL, con))
            {
                cmd.Parameters.AddRange(parameters);
                con.Open();
                return cmd.ExecuteNonQuery();
            }
        }
        public static void Delete(int[] userIdToDelete)
        {
            SqlConnection con = new SqlConnection(conString);
            string SQL = "SELECT * FROM " + tblName;
            SqlCommand cmd = new SqlCommand(SQL, con);
            SqlDataAdapter adapter = new SqlDataAdapter(cmd);
            DataSet ds = new DataSet();
            adapter.Fill(ds, tblName);

            for (int i = 0; i < userIdToDelete.Length; i++)
            {
                DataRow[] dr = ds.Tables[tblName].Select($"UserId = {userIdToDelete[i]}");
                if (dr.Length > 0) dr[0].Delete();
            }

            SqlCommandBuilder builder = new SqlCommandBuilder(adapter);
            adapter.UpdateCommand = builder.GetDeleteCommand();
            adapter.Update(ds, tblName);
        }

        public static void Update(User user)
        {
            SqlConnection con = new SqlConnection(conString);
            string SQLStr = $"SELECT * FROM {tblName} WHERE UserId={user.UserId}";
            SqlCommand cmd = new SqlCommand(SQLStr, con);

            DataSet ds = new DataSet();
            SqlDataAdapter adapter = new SqlDataAdapter(cmd);
            adapter.Fill(ds, tblName);

            if (ds.Tables[tblName].Rows.Count == 0) return;

            DataRow dr = ds.Tables[tblName].Rows[0];
            dr["Username"] = user.username;
            dr["Email"] = user.email;
            dr["Password"] = user.password;
            dr["FirstName"] = user.firstname;
            dr["LastName"] = user.lastname;
            dr["Phone"] = user.phone;
            dr["IdNumber"] = user.idNumber;
            dr["Gender"] = user.gender;
            dr["BirthDate"] = user.birthdate;
            dr["City"] = user.city;
            dr["Race"] = user.race;

            SqlCommandBuilder builder = new SqlCommandBuilder(adapter);
            adapter.UpdateCommand = builder.GetUpdateCommand();
            adapter.Update(ds, tblName);
        }

        public static void Insert(User user)
        {
            SqlConnection con = new SqlConnection(conString);
            string SQLStr = $"SELECT * FROM {tblName} WHERE 0=1";
            SqlCommand cmd = new SqlCommand(SQLStr, con);

            DataSet ds = new DataSet();
            SqlDataAdapter adapter = new SqlDataAdapter(cmd);
            adapter.Fill(ds, tblName);

            DataRow dr = ds.Tables[tblName].NewRow();
            dr["Username"] = user.username;
            dr["Email"] = user.email;
            dr["Password"] = user.password;
            dr["FirstName"] = user.firstname;
            dr["LastName"] = user.lastname;
            dr["Admin"] = user.Admin;
            dr["Phone"] = user.phone;
            dr["IdNumber"] = user.idNumber;
            dr["Gender"] = user.gender;
            dr["BirthDate"] = user.birthdate;
            dr["City"] = user.city;
            dr["Race"] = user.race;

            ds.Tables[tblName].Rows.Add(dr);

            SqlCommandBuilder builder = new SqlCommandBuilder(adapter);
            adapter.UpdateCommand = builder.GetInsertCommand();
            adapter.Update(ds, tblName);
        }

        public static User GetRow(string email, string password)
        {
            SqlConnection con = new SqlConnection(conString);
            string SQL = $"SELECT * FROM {tblName} WHERE Email=@Email AND Password=@Password";
            SqlCommand cmd = new SqlCommand(SQL, con);
            cmd.Parameters.AddWithValue("@Email", email);
            cmd.Parameters.AddWithValue("@Password", password);

            con.Open();
            SqlDataReader reader = cmd.ExecuteReader();

            User user = new User();
            if (reader.HasRows)
            {
                reader.Read();
                user.UserId = Convert.ToInt32(reader["UserId"]);
                user.username = reader["Username"].ToString();
                user.email = reader["Email"].ToString();
                user.password = reader["Password"].ToString();
                user.firstname = reader["FirstName"].ToString();
                user.lastname = reader["LastName"].ToString();
                user.Admin = Convert.ToBoolean(reader["Admin"]);
                user.phone = reader["Phone"].ToString();
                user.idNumber = reader["IdNumber"].ToString();
                user.gender = reader["Gender"].ToString();
                user.birthdate = reader["BirthDate"].ToString();
                user.city = reader["City"].ToString();
                user.race = reader["Race"].ToString();
            }
            else
            {
                user.username = "";
                user.Admin = false;
                reader.Close();
                con.Close();
                return null;
            }

            reader.Close();
            con.Close();
            return user;
        }

        public static string BuildSimpleUsersTable(DataTable dt)
        {
            string str = "<table class='usersTable' align='center'><caption>Users</caption>";
            str += "<tr>";
            foreach (DataColumn column in dt.Columns)
            {
                str += "<td>" + column.ColumnName + "</td>";
            }
            str += "</tr>";

            foreach (DataRow row in dt.Rows)
            {
                str += "<tr>";
                foreach (DataColumn column in dt.Columns)
                {
                    str += "<td>" + row[column] + "</td>";
                }
                str += "</tr>";
            }

            str += "</table>";
            return str;
        }

        public static string BuildUsersTable(DataTable dt)
        {
            string str = "<table class='usersTable' align='center'><caption>Users</caption>";
            str += "<tr><td> </td>";
            foreach (DataColumn column in dt.Columns)
            {
                str += "<td>" + column.ColumnName + "</td>";
            }
            str += "</tr>";

            foreach (DataRow row in dt.Rows)
            {
                str += "<tr>";
                str += "<td>" + CreateRadioBtn(row["userId"].ToString()) + "</td>";
                foreach (DataColumn column in dt.Columns)
                {
                    str += "<td>" + row[column] + "</td>";
                }
                str += "</tr>";
            }

            str += "</table>";
            return str;
        }

        public static string CreateRadioBtn(string id)
        {
            return $"<input type='checkbox' name='chk{id}' id='chk{id}' runat='server' />";
        }

        public static DataTable SortTable(DataTable dt, string column, string dir)
        {
            dt.DefaultView.Sort = column + " " + dir;
            return dt.DefaultView.ToTable();
        }

        public static DataTable FilterTable(DataTable dt, string column, string criteria)
        {
            dt.DefaultView.RowFilter = column + "='" + criteria + "'";
            return dt.DefaultView.ToTable();
        }
    }
}