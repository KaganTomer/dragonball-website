<%@ Page Title="" Language="C#" MasterPageFile="~/Site1.Master" AutoEventWireup="true" CodeBehind="Register1.aspx.cs" Inherits="Dragonball_final1.pages.mainPages.Register1" %>
<asp:Content ID="Content1" ContentPlaceHolderID="TitleContent" runat="server">
    Register
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="head" runat="server">
    <link rel="icon" href="~/images/DragonBallref1.png" />
    <link rel="stylesheet" href="~/css/navbar.css" />
    <link href="../../css/Register2.css" rel="stylesheet" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" />
</asp:Content>
<asp:Content ID="Content3" ContentPlaceHolderID="ContentPlaceHolder2" runat="server">
     <div class="registerContainer">
     <div class="container">
         <div class="title">Become a Sayian!</div>
         <div class="content">
             <form id="signUpForm" runat="server" onsubmit="return checkForm()">
                 <div class="user-details">
                     <div class="input-box">
                         <span class="details">Email</span>
                         <span class="msgboxes" id="emailMsg" runat="server" ClientIDMode="Static"></span>
                         <input ClientIDMode="Static" name="email" id="email" type="text" placeholder="Enter your email">
                     </div>
                     <div class="input-box">
                         <span class="details">Username</span>
                         <span class="msgboxes" id="usernameMsg"></span>
                         <input ClientIDMode="Static" class="userName" name="username" id="username" type="text" placeholder="Enter your username">
                     </div>
                     <div class="input-box">
                         <span class="details">First Name</span>
                         <span class="msgboxes" id="firstnameMsg"></span>
                         <input ClientIDMode="Static" class="fName" name="firstName" id="firstName" type="text" placeholder="First Name">
                     </div>
                     <div class="input-box">
                         <span class="details">Last Name</span>
                         <span class="msgboxes" id="lastnameMsg"></span>
                         <input ClientIDMode="Static" class="lName" name="lastName" id="lastName" type="text" placeholder="Last Name">
                     </div>
                     <div class="input-box">
                         <span class="details">Password</span>
                         <span class="msgboxes" id="passMsg"></span>
                         <input type="text" ClientIDMode="Static" class="pass" name="password" id="password" placeholder="Enter your password">
                     </div>
                     <div class="input-box">
                         <span class="details">Confirm Password</span>
                         <span class="msgboxes" id="passconfirmMsg"></span>
                         <input id="password2" ClientIDMode="Static" type="text" placeholder="Confirm your password">
                     </div>
                     <div class="input-box">
                         <span class="details">Id Number</span>
                         <span class="msgboxes" id="IdNumberMsg"></span>
                         <input  ClientIDMode="Static" type="text" name="IdNumber" id="IdNumber" placeholder="Enter your Id">                     </div>
                     <div class="input-box">
                         <span class="details">Phone Number</span>
                         <span class="msgboxes"  id="phoneMsg"></span>
                         <input  ClientIDMode="Static" class="pNumber" name="phoneNumber" id="phoneNumber" type="text" placeholder="Enter your number">
                     </div>
                     <div class="input-box">
                         <span class="details">Birth Date</span>
                         <span class="msgboxes" id="birthdateMsg"></span>
                         <input  ClientIDMode="Static" name="birthdate" id="birthdate" type="date">
                     </div>
                     <div class="input-box">
                         <span class="details">City</span>
                         <span class="msgboxes" id="cityMsg"></span>
                         <select id="city" ClientIDMode="Static" name="city"  class="city">
                             <option value="null" selected hidden>--Select an option--</option>
                             <option value="petch-tikva">Petch-tikva</option>
                             <option value="tel-aviv">Tel-aviv</option>
                             <option value="paris">Paris</option>
                             <option value="tokyo">Tokyo</option>
                             <option value="sydney">Sydney</option>
                             <option value="berlin">Berlin</option>
                             <option value="rome">Rome</option>
                             <option value="beijing">Beijing</option>
                             <option value="mexico_city">Mexico City</option>
                             <option value="cairo">Cairo</option>
                             <option value="moscow">Moscow</option>
                             <option value="rio_de_janeiro">Rio de Janeiro</option>
                             <option value="istanbul">Istanbul</option>
                             <option value="cape_town">Cape Town</option>
                             <option value="toronto">Toronto</option>
                             <option value="helsinki">Helsinki</option>
                             <option value="seoul">Seoul</option>
                             <option value="athens">Athens</option>
                             <option value="dubai">Dubai</option>
                             <option value="buenos_aires">Buenos Aires</option>
                             <option value="nairobi">Nairobi</option>
                             <option value="amsterdam">Amsterdam</option>
                             <option value="hong_kong">Hong Kong</option>
                             <option value="madrid">Madrid</option>
                             <option value="mumbai">Mumbai</option>
                             <option value="johannesburg">Johannesburg</option>
                             <option value="singapore">Singapore</option>
                             <option value="budapest">Budapest</option>
                             <option value="stockholm">Stockholm</option>
                             <option value="zurich">Zurich</option>
                             <option value="washington_dc">Washington, D.C.</option>
                             <option value="lisbon">Lisbon</option>
                             <option value="vancouver">Vancouver</option>
                             <option value="auckland">Auckland</option>
                             <option value="delhi">Delhi</option>
                             <option value="budapest">Budapest</option>
                             <option value="other">other</option>
                         </select>
                     </div>
                     <div class="gender-details">
                         <span class="gender-title">Gender</span>
                         <span class="msgboxes" id="genderMsg"></span>
                         <div class="category">
                             <input type="radio" name="gender" value="Male" class="dot1" id="male">
                             <label for="male">Male</label>
                             <input type="radio" name="gender" value="Female" class="dot2" id="female">
                             <label for="female">Female</label>
                             <input type="radio" name="gender" value="Other" class="dot3" id="other">
                             <label for="other">Other</label>
                         </div>
                     </div>
                     <div class="input-box">
                         <span class="details">Race</span>
                         <span class="msgboxes" id="raceMsg"></span>
                         <select id="race" ClientIDMode="Static" name="race" class="race">
                             <option value="" disabled selected hidden>--Select an option--</option>
                             <option value="Saiyan">Saiyan</option>
                             <option value="Human">Human</option>
                             <option value="Majin">Majin</option>
                             <option value="Kai">Kai</option>
                         </select>
                     </div>

                     <div class="button-container">
                         <button type="submit" class="submit-button" runat="server" id="submit" name="signUpButton">Register</button>
                         <button type="reset" id="reset" onclick="clearAll()">Reset</button>
                     </div>
                 </div>
             </form>
         </div>
     </div>
 </div>

 <img id="GokuPoseHi" src="/images/GokuPoseHi.png" />
 <div class="already">
     <h3>Already have an account?</h3>
     <h3>Click here to sign in!</h3>
     <span id="clich_here"><a href="Login.aspx">Sign in</a></span>
 </div>
 <div id="background"></div>
    <script src="../../js/Register.js"></script>
</asp:Content>
