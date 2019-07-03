

let currentQue;
let userSelection = [];
let correct = 0;
let attempted = 0;
let visited = 0;
var btn = document.getElementsByClassName('btn');

const questions = [
                    "1+5 ?",
                    "12+52 ?",
                    "11+45 ?",
                    "15+58 ?",
                    "21+54 ?",
                    "19+15 ?",
                    "23+45 ?",
                    "32+35 ?",
                    "13+52 ?",
                    "35+24 ?",
                    ];

const answers = [0,3,1,1,1,2,0,2,1,3];

const opt1 = ["6","67","59","71","60","23","68","64","67","51"];

const opt2 = ["8","84","56","73","75","64","67","66","65","69"];

const opt3 = ["3","54","51","83","85","34","88","67","35","49"];

const opt4 = ["9","64","58","43","35","36","75","95","75","59"];

let totalQue = questions.length;

window.onload = ()=>{
    let display = "";
    display += `<p align=center>Click on the button to see questions.</p>`
    for(let i =0 ;i< totalQue; i++){
        display += `<button class="btn" id="` + parseInt(i+1) + `" onclick="show(` + i + `)">` + parseInt(i+1) + `</button>`;
    }
    document.getElementById('buttons').innerHTML = display;
};

let show = (q)=>{

    document.getElementById('question').innerHTML =
                `<h2>Question :</h2>
                    <p id="que">` + questions[q] + `</p>`;

    document.getElementById('res').innerHTML=
                `<p>
                <div class="opt">
                    <input type="radio" name="opt" id="opt1" value="` + opt1[q] + `">
                    <span>` + opt1[q] + `</span>
                </div>
                <div class="opt">
                    <input type="radio" name="opt" id="opt2" value="` + opt2[q] + `">
                    <span>` + opt2[q] + `</span>
                </div>
                <div class="opt">
                    <input type="radio" name="opt" id="opt3" value="` + opt3[q] + `">
                    <span>` + opt3[q] + `</span>
                </div>
                <div class="opt">
                    <input type="radio" name="opt" id="opt4" value="` + opt4[q] + `">
                    <span>` + opt4[q] + `</span>
                </div>
                </p><br>`;

    document.getElementById('controls').innerHTML=
                `<button class="btn2" onclick="submit(currentQue)">
                    Submit
                </button>
                <button class="btn2" onclick="unCheck(currentQue)">
                    Clear
                </button>
                <button class="btn2" id="finish" onclick="result()">
                    Finish
                </button>`;

    currentQue = q;
    visited++;

    document.getElementById(q+1).style.backgroundColor = "orange";

    for(let i=0;i<4;i++){
        if(userSelection[currentQue] == i){
            document.getElementById('opt'+parseInt(i+1)).checked = true;
            document.getElementById(q+1).style.backgroundColor = "green";
            visited--;
        }
    }
};

let submit = (t)=>{
    let  selected = 0;
    for(let i=1;i<5;i++){
        if(document.getElementById('opt'+i).checked){
            userSelection[t] = i-1;
            selected = 1;
        }
    }

    if(!selected)
        alert("Please select a option to Submit !!")
    else{
        document.getElementById(t+1).style.backgroundColor = "green";  
        attempted = 0;
        for(let i=0;i<totalQue;i++){
            if(btn[i].style.backgroundColor == "green")
                attempted++;
        }
    }

    // alert(userSelection[t]);
    document.getElementById('attempt').innerHTML = attempted;
};

let unCheck = (q)=>{
    for(let i=1;i<5;i++){
        if(document.getElementById('opt'+i).checked){
            document.getElementById('opt'+i).checked = false;
            document.getElementById(q+1).style.backgroundColor = "orange";
        }
    }
    userSelection[q] = null;
};

let checkAnswer = ()=>{
    for(let i=0;i<totalQue;i++){
        if(userSelection[i] == answers[i])
            correct++;
    }
    // alert("Correct Answers - " + correct + "\nWrong Answers - " + parseInt(attempted-correct) + "\nVisited - " + visited);
};

let result = ()=>{

    checkAnswer();
    document.getElementById('question').innerHTML = "";
    document.getElementById('res').innerHTML = "";
    document.getElementById('controls').innerHTML = "";

    document.getElementById('result').style.backgroundColor = "#f5f5f5";
    document.getElementById('scorehead').innerHTML = "You finished the test !!<br> Thanks for taking this test. Have a good day.";
    document.getElementById('score').innerHTML = `Correct Answers - ` + correct + `<br>Wrong Answers - ` + parseInt(attempted-correct) + `<br>Visited - ` + visited;

    let btns = document.getElementsByTagName('button');
    for(let i=0;i<btns.length;i++){
        btns[i].onclick = null;
    }
    clearInterval(time);
    document.getElementById('min').innerHTML = "00";
    document.getElementById('sec').innerHTML = "00"; 
};

let currentTime = setInterval(()=>{
    let date = new Date();
    document.getElementById('t').innerHTML= date.getHours() + ':' + date.getMinutes() + ':'+ date.getSeconds();
},1000);

// let timer = (q)=>{
    let min = 10;
    let sec = 00;

    let time = setInterval(()=>{
        document.getElementById('min').innerHTML = min;
        document.getElementById('sec').innerHTML = sec; 
        sec--;
        if(sec==-1){
            min--;
            sec=59;
        }
        if(min==-1){
            clearInterval(time);
            result();
        }
    },1000);
    // setTimeout(()=>{
    //     document.getElementById('question').innerHTML = "";
    //     document.getElementById('res').innerHTML = "";
    //     document.getElementById('controls').innerHTML = "";
    //     alert((q+1));
    //     document.getElementById(q+1).onclick = null;
    // },3000);
    // // alert("time up!!");
// };
