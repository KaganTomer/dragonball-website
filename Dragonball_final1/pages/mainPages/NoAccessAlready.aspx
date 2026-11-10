<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="NoAccessAlready.aspx.cs" Inherits="Dragonball_final1.pages.mainPages.NoAccess" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>No Access!!</title>
    <link href="../../css/NoAccess.css" rel="stylesheet" />
</head>
<body>
    <div class="center">
        <h1 id="success">Already Signed In!</h1>
        <h1 id="ClickHere">Click <a href="Default.aspx" class="highlight">Here</a> To Go To <br /> Main Page</h1>
    </div>
    <img id="BuuThumbsDown" src="../../images/BuuThumbsDown.png" />
    <img src="../../images/WarningSign.png" id="WarningSign"/>
    <div id="background"></div>
</body>
</html>
