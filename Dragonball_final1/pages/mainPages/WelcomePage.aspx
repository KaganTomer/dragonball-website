<%@ Page Title="" Language="C#" MasterPageFile="~/Site1.Master" AutoEventWireup="true" CodeBehind="WelcomePage.aspx.cs" Inherits="Dragonball_final1.pages.mainPages.WelcomePage" %>
<asp:Content ID="Content1" ContentPlaceHolderID="TitleContent" runat="server">
    Welcome
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="head" runat="server">
    <link href="../../css/WelcomePage.css" rel="stylesheet" />
</asp:Content>
<asp:Content ID="Content3" ContentPlaceHolderID="ContentPlaceHolder2" runat="server">
    <h1 id="welcome">Welcome!</h1>
    <h1 id="what">You will now be able to</h1>
    <ul class="list">
        <li><span class="liColor">Answer the <a class="highlight" href="Questionnaire.aspx">Quiz!</a></span></li>
        <li><span class="liColor">View the <a class="highlight" href="Gallery.aspx">Gallery!</a></span></li>
        <li><span class="liColor">Learn about the <a class="highlight" href="CharacterSelection.aspx">Characters!</a></span></li>
    </ul>
    <div id="visitorWelcome">
        <h1>Welcome!</h1>
     </div>
    <div class="visitorName" id="visitorName" runat="server">
        <%--here will be displayed the users name--%> Guest
    </div>
    <div id="background"></div>
</asp:Content>
