<%@ Page Title="" Language="C#" MasterPageFile="~/Site1.Master" AutoEventWireup="true" CodeBehind="Login.aspx.cs" Inherits="Dragonball_final.pages.mainPages.Login" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Sign-in</title>
    <link rel="icon" href="~/images/DragonBallref1.png" />
    <link rel="stylesheet" href="~/css/navbar.css" />
    <link href="../../css/Log-in.css" rel="stylesheet" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" />
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder2" runat="server">
        

    <%------------------------------------------%> <%-- Forms--%>

    <div class="overflow">
        <div class="container" id="container"> 
            <div class="form-container sign-in">
                <form runat="server" id="signInForm" method="post" action="Login.aspx" onsubmit="return checkForm()">
                    <table>
                        <h1>Sign In</h1>
                        <input type="text" id="inEmail" name="inEmail" placeholder="Email" />
                        <span class="msgboxes" id="emailMsg"></span>
                        <input type="password" id="inPassword" name="inPassword" placeholder="Password" />
                        <span class="msgboxes" id="passMsg" runat="server" ClientIDMode="Static"></span>
                        <a href="#">Forgot Your Password?</a>
                        <div class="button-group">
                            <button type="submit" class="submit-button" runat="server" name="signInButton">Sign In</button>
                            <button type="reset" class="reset-button" onclick="clearAll()">Reset</button>
                        </div>
                    </table>
                </form>
            </div>

    <%------------------------------------------%> <%--animations--%>

            <div class="toggle-container">
                <div class="toggle">
                    <div class="toggle-panel toggle-right">
                        <img id="GokuPosePoint" src="/images/GokuPosePoint.png" />
                        <h1>Hello, Friend!</h1>
                        <p>Sign in with your personal details to use all of site features!</p>
                        <p>You don't have an account? click the button below to sign up!</p>
                        <a href="Register1.aspx" class="to_signIn"><button class="hidden" id="register">Sign Up</button></a>
                    </div>
                </div>
            </div>
        </div>
    </div>


    <div id="background"></div>
    <script src="../../js/Login.js"></script>

</asp:Content>
<asp:Content ID="Content3" ContentPlaceHolderID="TitleContent" Runat="Server">
    Log in
</asp:Content>