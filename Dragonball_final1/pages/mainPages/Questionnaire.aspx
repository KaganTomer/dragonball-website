<%@ Page Title="" Language="C#" MasterPageFile="~/Site1.Master" AutoEventWireup="true" CodeBehind="Questionnaire.aspx.cs" Inherits="Dragonball_final.pages.mainPages.QuizNormal" %>
<asp:Content ID="Content1" ContentPlaceHolderID="TitleContent" runat="server">
    Quiz
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="head" runat="server">
    <link href="../../css/quiz_normal.css" rel="stylesheet" />
</asp:Content>
<asp:Content ID="Content3" ContentPlaceHolderID="ContentPlaceHolder2" runat="server">

    <form id="quizform" onsubmit="return allSelected()">
        <table>
            <div class="radio_q" id="radio_q">
                <h2 id="q1Text">Which of these is the strongest?</h2> 
                <div class="q1">
                    <input id="goku" type="radio" name="ques1" value="goku"/>
                    <label for="goku">Goku</label>                
                    <input id="gohan" type="radio" name="ques1" value="gohan"/>
                    <label for="gohan">Gohan</label>               
                    <input id="zeno" type="radio" name="ques1" value="zeno"/>
                    <label for="zeno">Zeno</label>
                    <input id="beerus" type="radio" name="ques1" value="beerus"/>
                    <label for="beerus">Beerus</label>
                </div>
                
                
                <h2 id="q2Text">Which goku form is the strongest?</h2>
                <div class="q2">
                    <input id="mui" type="radio" name="ques2" value="mui"/>
                    <label for="mui">MUI</label>            
                    <input id="trueui" type="radio" name="ques2" value="true_ui"/>
                    <label for="trueui">TRUE UI</label>               
                    <input id="ssj3" type="radio" name="ques2" value="ssj3"/>
                    <label for="ssj3">SSJ3</label>     
                    <input id="ssjgod" type="radio" name="ques2" value="ssj_god"/>
                    <label for="ssjgod">SSJ GOD</label>
                </div>
                
                
                <h2 id="q3Text">Who is the God of destruction of universe 7?</h2>
                <div class="q3">
                    <input id="whis" type="radio" name="ques3" value="whis"/>
                    <label for="whis">Whis</label>       
                    <input id="belmod" type="radio" name="ques3" value="belmod"/>
                    <label for="belmod">Belmod</label>           
                    <input id="champa" type="radio" name="ques3" value="champa"/>
                    <label for="champa">Champa</label>
                    <input id="beerus2" type="radio" name="ques3" value="beerus"/>
                    <label for="beerus2">Beerus</label>
                </div>   
                <img id="BeerusImage" src="../../images/quiz/LordBeerus.png" />
                <img id="ZenoImage" src="../../images/quiz/Zeno.png" />
            </div>
        
            <div class="checkbox_q" id="checkbox_q">
                <h2 id="q4Text">Which of the following are sayians?</h2>
                <div class="q4">
                    <input id="goku_check" type="checkbox" name="ques4" value="goku"/>
                    <label for="goku_check">Goku</label>         
                    <input id="frieza" type="checkbox" name="ques4" value="frieza"/>
                    <label for="frieza">Frieza</label>           
                    <input id="nappa" type="checkbox" name="ques4" value="nappa"/>
                    <label for="nappa">Nappa</label>
                    <input id="vegeta" type="checkbox" name="ques4" value="vegeta"/>
                    <label for="vegeta">Vegeta</label>
                </div>
                <img id="SaiyanLogo" src="../../images/SaiyanLogo.png" />
                <h2 id="q5Text">Which of the following are gods?</h2>
                <div class="q5">
                    <input id="yamcha" type="checkbox" name="ques5" value="yamcha"/>
                    <label for="yamcha">Yamcha</label>            
                    <input id="beerus3" type="checkbox" name="ques5" value="beerus"/>
                    <label for="beerus3">Beerus</label>               
                    <input id="kingkai" type="checkbox" name="ques5" value="kingkai"/>
                    <label for="kingkai">King Kai</label> 
                    <input id="piccolo" type="checkbox" name="ques5" value="piccolo"/> 
                    <label for="piccolo">Piccolo</label>
                </div>    
            </div>

            <div class="selection_q" id="selection_q">
                <label for="mangaSelect" id="q6Text">Which is the author of the Dragon Ball manga?</label>
                <br />
                <select id="mangaSelect" name="mangaSelect">
                    <option value="null">Choose</option>
                    <option value="Saiyan">Kentaro Miura</option>
                    <option value="TiteKubo">Tite Kubo</option>
                    <option value="AkiraToriama">Akira Toriama</option>
                    <option value="EiichiroOda">Eiichiro Oda</option>
                </select>
                <img id="AkiraToriyama" src="/images/AkiraToriyama.png" />
            </div>

            <div class="text_q" id="text_q">
                <label for="thoughts">What do you think of my site?</label>
                <br />
                <input id="thoughts" type="text" placeholder="AMAZING!" />
            </div>

            <button id="reset" type="reset" onclick="resetAll()">Reset</button>
            <button id="submit" type="submit" name="quizSubmit">Submit</button>
        </table>
    </form>
    <div id="resultsDiv">
        <h1 id="resultText">You got<br /><span id="results">0 / 5</span><br />Press here to retake quiz</h1>
        <a><button id="retake" onclick="retake()">Quiz</button></a>
    </div>  


    
    <%--<img id="GokuPoseThink" src="/images/GokuPoseThink.png" />--%>
    <h1 id="myH1">Quiz</h1>
    <div id="background"></div>

    <script src="../../js/quiz2.js"></script>
</asp:Content>
