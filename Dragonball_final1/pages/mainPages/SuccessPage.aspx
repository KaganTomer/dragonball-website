<%@ Page Title="" Language="C#" MasterPageFile="~/Site1.Master" AutoEventWireup="true" CodeBehind="SuccessPage.aspx.cs" Inherits="Dragonball_final1.pages.mainPages.SuccessPage" %>
<asp:Content ID="Content1" ContentPlaceHolderID="TitleContent" runat="server">
    Success!
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="head" runat="server">
    <link href="../../css/successPage.css" rel="stylesheet" />
</asp:Content>
<asp:Content ID="Content3" ContentPlaceHolderID="ContentPlaceHolder2" runat="server">
    <div class="center">
        <h1 id="success">Successfuly Signed up!</h1>
        <h1 id="ClickHere">Click <a href="Login.aspx" class="highlight">Here</a> To Sign in</h1>
        <img id="GokuPoseAbove" src="../../images/GokuPoseAbove.png" />
    </div>
    <div id="background"></div>
</asp:Content>
