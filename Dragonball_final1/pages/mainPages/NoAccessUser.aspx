<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="NoAccessUser.aspx.cs" Inherits="Dragonball_final1.pages.mainPages.NoAccessUser" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>No Access!!</title>
    <link href="../../css/NoAccess.css" rel="stylesheet" />
</head>
<body>
    <div class="center">
        <h1 id="success">No Access!!</h1>
        <h1 id="Expl">You need to be signed in to view this page!</h1>
        <h1 id="ClickHere">Click <a href="Login.aspx" class="highlight">Here</a> To SIgn In</h1>
    </div>
    <img id="BuuThumbsDown" src="../../images/BuuThumbsDown.png" />
    <img src="../../images/WarningSign.png" id="WarningSign"/>
    <div id="background"></div>
</body>
</html>
