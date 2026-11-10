<%@ Page Title="" Language="C#" MasterPageFile="~/Site1.Master" AutoEventWireup="true" CodeBehind="CharacterSelection.aspx.cs" Inherits="Dragonball_final.pages.mainPages.CharacterSelection" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Characters</title>
    <link rel="icon" href="~/images/DragonBallref1.png" />
    <link href="../../css/characterSelection.css" rel="stylesheet" />
    <link rel="stylesheet" href="~/css/navbar.css" />
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder2" runat="server">
    
    <h1 id="myH1">Characters</h1>

    <button id="btnRight"></button>
    <button id="btnLeft"></button>
    <div class="banner">
        <div id="slider" class="slider" style="--quantity: 11">
            <div id="itemFront" class="item" style="--position: 1"><a href="/pages/characters_pages/GokuPage.aspx"><img src="/images/Goku4.png"></a></div>
            <div id="item2" class="item" style="--position: 2"><a href="/pages/characters_pages/WhisPage.aspx"><img src="/images/Whis1.png"></a></div>
            <div id="item3" class="item" style="--position: 3"><a href="/pages/characters_pages/BeerusPage.aspx"><img src="/images/LordBeerus1.png"></a></div>
            <div id="item4" class="item" style="--position: 4"><a href="/pages/characters_pages/YamchaPage.aspx"><img src="/images/yamcha1.png"></a></div>
            <div id="item5" class="item" style="--position: 5"><a href="/pages/characters_pages/RoshiPage.aspx"><img src="/images/Roshi1.png"></a></div>
            <div id="item6" class="item" style="--position: 6"><a href="/pages/characters_pages/BulmaPage.aspx"><img src="/images/Bulma1.png"></a></div>
            <div id="item7" class="item" style="--position: 7"><a href="/pages/characters_pages/FrizaPage.aspx"><img src="/images/Friza5.png"></a></div>
            <div id="item8" class="item" style="--position: 8"><a href="/pages/characters_pages/GohanPage.aspx"><img src="/images/Gohan1.png"></a></div>
            <div id="item9" class="item" style="--position: 9"><a href="/pages/characters_pages/PiccoloPage.aspx"><img src="/images/Picollo2.png"></a></div>
            <div id="item10" class="item" style="--position: 10"><a href="/pages/characters_pages/KrillinPage.aspx"><img src="/images/Krillin2.png"></a></div>
            <div id="item11" class="item" style="--position: 11"><a href="/pages/characters_pages/VegetaPage.aspx"><img src="/images/Vegeta2.png"></a></div>
        </div>
    </div>
    
    <div id="background"></div>
    <script src="/js/Characters.js"></script>
</asp:Content>
<asp:Content ID="Content3" ContentPlaceHolderID="TitleContent" Runat="Server">
    Characters
</asp:Content>
