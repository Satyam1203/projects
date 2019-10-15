var heightFunction = ()=> {
    var card = document.querySelector('.card');
    var img = document.querySelectorAll('.img');
    var height = card.clientWidth*7/16;
    console.log(height);
    for(let i=0;i<img.length;i++)
        img[i].style.height = height + "px";
}
window.onload = ()=> {
    heightFunction();
}
window.onresize = ()=> {
    heightFunction();
}
window.onscroll = ()=> {
    var h1 = document.querySelector('h1');
    var scrollTop = document.documentElement.scrollTop;
    if(scrollTop>100){
        h1.style.fontSize = "20px";
        h1.style.fontWeight = "bold";
    }
    else{
        h1.style.fontSize = "50px";
        h1.style.fontWeight = "initial";
    }
}