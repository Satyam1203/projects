let turn = 0;
let b = [0,1,2,3,4,5,6,7,8];
let player_x = 0;
let player_o = 0;

let show = (t)=>{
    if(turn%2)
        t.innerHTML = "X";
    else
        t.innerHTML = "O";
    turn++;
    t.onclick = null;
    // alert("b["+parseInt(t.id-1)+"] = "+t.innerHTML);
    b[parseInt(t.id-1)] = t.innerHTML;
    check(t);
}; 

let check = (t)=>{
    if((b[0]==b[1] && b[1]==b[2]) || (b[3]==b[4] && b[4]==b[5]) ||
        (b[6]==b[7] && b[7]==b[8]) || (b[4]==b[1] && b[1]==b[7]) ||
        (b[2]==b[5] && b[5]==b[8]) || (b[0]==b[3] && b[3]==b[6]) ||
        (b[0]==b[4] && b[4]==b[8]) || (b[4]==b[2] && b[2]==b[6]))
        {
            if(turn%2){ 
                player_o++; 
                // console.log("O"+player_o);
                document.getElementById('result').innerHTML = `Player-<span class='red'>O</span> won !!`;
                setTimeout(()=>window.location = 'index.html',2000);
                document.getElementById('points_o').innerHTML = player_o;
            }
            else {
                player_x++;
                // console.log("X"+player_x);
                document.getElementById('result').innerHTML = `Player-<span class='red'>X</span> won !!`;
                setTimeout(()=>window.location = 'index.html',2000);
                document.getElementById('points_x').innerHTML = player_x;
            } 
        }
};
