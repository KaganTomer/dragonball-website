<%@ Page Title="" Language="C#" MasterPageFile="~/Site1.Master" AutoEventWireup="true" CodeBehind="Admin.aspx.cs" Inherits="Dragonball_final1.pages.mainPages.Admin" %>
<asp:Content ID="Content1" ContentPlaceHolderID="TitleContent" runat="server">
    Admin
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="head" runat="server">
    <link href="../../css/Admin.css" rel="stylesheet" />
</asp:Content>
<asp:Content ID="Content3" ContentPlaceHolderID="ContentPlaceHolder2" runat="server">
    <div id="adminDiv">
        <table>
            <tr>
                <th>How Many Users Are Active Now </th>
                <th>How Many Visitors Ever</th>
            </tr>
            <tr>
                <td><%=Application["ActiveUsers"] %></td>
                <td><%=Application["AllTimeUsers"] %></td>
            </tr>
        </table>
        <div id="tableDiv" runat="server">
            <%--here will be the table data--%>
        </div>
    </div>
    
    <h1 id="myH1">Admin</h1>
</asp:Content>
