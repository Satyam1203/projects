
let turn = 0;
let b = [0,1,2,3,4,5,6,7,8];

//Get previous value of number of wins by O
if(sessionStorage.player_1pt){
    document.getElementById('points_1pt').innerHTML = sessionStorage.player_1pt;
}
else{
    document.getElementById('points_1pt').innerHTML = 0;
}

//Get previous value of number of wins by X
if(sessionStorage.player_2pt){
    document.getElementById('points_2pt').innerHTML = sessionStorage.player_2pt;
}
else{
    document.getElementById('points_2pt').innerHTML = 0;
}

//Get previous value of number of games drawn
if(sessionStorage.draw){
    document.getElementById('draw').innerHTML = sessionStorage.draw;
}
else{
    document.getElementById('draw').innerHTML = 0;
}

let player1 = 'X';
let player2 = 'O';
if(sessionStorage.game){
    sessionStorage.game = Number(sessionStorage.game) + 1;
    if(sessionStorage.game%2==1){
        alert("Player 1 turn");
    }
    else{
        alert("Player 2 turn");
    }
}else{
    sessionStorage.game = 1;
}

let show = (t)=>{
    if(sessionStorage.game%2==1){
        if(turn%2){
            t.innerHTML = player1;
            // t.parentNode.style.backgroundColor = "red";
            // t.style.color = "#fff";
        }
        else{
            t.innerHTML = player2;
            t.style.color = "red";
        }
    }
    else{
        if(turn%2){
            t.innerHTML = player2;
            t.style.color = "red";
        }
        else{
            t.innerHTML = player1;   
            // t.parentNode.style.backgroundColor = "red";
            // t.style.color = "#fff";
        }
    }
    turn++;
    t.onclick = null;
    b[parseInt(t.id-1)] = t.innerHTML;
    check(t);
}; 

let check = (t)=>{
    if((b[0]==b[1] && b[1]==b[2]) || (b[3]==b[4] && b[4]==b[5]) ||
        (b[6]==b[7] && b[7]==b[8]) || (b[4]==b[1] && b[1]==b[7]) ||
        (b[2]==b[5] && b[5]==b[8]) || (b[0]==b[3] && b[3]==b[6]) ||
        (b[0]==b[4] && b[4]==b[8]) || (b[4]==b[2] && b[2]==b[6]))
        {
            for(let i=1;i<9;i++){
                document.getElementById(i).onclick = null;
            }
            if(sessionStorage.game%2==1){
            if(turn%2){ 
                document.getElementById('result').innerHTML = `Player-1 <span class='red'>( ` + player2 + ` )</span> won !!`;
                // setTimeout(()=>window.location = 'index.html',2000);
                if(sessionStorage.player_1pt){
                    sessionStorage.player_1pt = Number(sessionStorage.player_1pt) + 1; 
                }else{
                    sessionStorage.player_1pt = 1;
                }
                document.getElementById('points_1pt').innerHTML = sessionStorage.player_1pt;
                play();
            }
            else {
                document.getElementById('result').innerHTML = `Player-2 <span class='red'>( ` + player1 + ` )</span> won !!`;
                // setTimeout(()=>window.location = 'index.html',2000);
                if(sessionStorage.player_2pt){
                    sessionStorage.player_2pt = Number(sessionStorage.player_2pt) + 1; 
                }else{
                    sessionStorage.player_2pt = 1;
                }
                document.getElementById('points_2pt').innerHTML = sessionStorage.player_2pt;
                play();
            } 
          }else{
            if(turn%2==1){ 
                document.getElementById('result').innerHTML = `Player-2 <span class='red'>( ` + player1 + ` )</span> won !!`;
                // setTimeout(()=>window.location = 'index.html',2000);
                if(sessionStorage.player_2pt){
                    sessionStorage.player_2pt = Number(sessionStorage.player_2pt) + 1; 
                }else{
                    sessionStorage.player_2pt = 1;
                }
                document.getElementById('points_2pt').innerHTML = sessionStorage.player_2pt;
                play();
            }
            else {
                document.getElementById('result').innerHTML = `Player-1 <span class='red'>( ` + player2 + ` )</span> won !!`;
                // setTimeout(()=>window.location = 'index.html',2000);
                if(sessionStorage.player_1pt){
                    sessionStorage.player_1pt = Number(sessionStorage.player_1pt) + 1; 
                }else{
                    sessionStorage.player_1pt = 1;
                }
                document.getElementById('points_1pt').innerHTML = sessionStorage.player_1pt;
                play();
            } 
          }
        }
    else if(turn==9){
        if(sessionStorage.draw){
            sessionStorage.draw = Number(sessionStorage.draw) + 1;
        }else{
            sessionStorage.draw = 1;
        }
        document.getElementById('draw').innerHTML = sessionStorage.draw;
        document.getElementById('result').innerHTML = `<br>Game D<span class='red'>r</span>awn !!`;
        play();
    }
};

let play = ()=>{
    let target = document.getElementById('play');
    let a = document.createElement('a');
    a.innerHTML = "Play again !!";
    target.appendChild(a);
    a.classList.add('btn');
    a.addEventListener('click',()=>{
        document.location.href = 'index.html';
    });
};
