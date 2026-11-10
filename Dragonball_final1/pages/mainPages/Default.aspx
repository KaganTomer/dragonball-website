<%@ Page Title="" Language="C#" MasterPageFile="~/Site1.Master" AutoEventWireup="true" CodeBehind="Default.aspx.cs" Inherits="Dragonball_final.pages.mainPages.Default" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>HomePage</title>
    <link rel="icon" href="~/images/DragonBallref1.png" />
    <link rel="stylesheet" href="~/css/navbar.css" />
    <link rel="stylesheet" href="../../css/homepage.css" />
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder2" runat="server">    
    <div id="background"></div>
    <img id="BigCenterLogo" src="/images/DB1996logo.png" />
    <div id="visitorWelcome">
        <h1>Welcome!</h1>
    </div>
    <div class="visitorName" id="visitorName" runat="server">
        <%--here will be displayed the users name--%> Guest
    </div>
</asp:Content>
<asp:Content ID="Content3" ContentPlaceHolderID="TitleContent" Runat="Server">
    Home Page
</asp:Content>
