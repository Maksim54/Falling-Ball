let x=250, y=20, r=20;
let ysamm=1, xsamm=0, ykiirendus=0.4;
let t, g; //tahvel, graafiline kontekst
function start(){
    t=document.getElementById("tahvel");
    g=t.getContext("2d");
    setInterval('liigu()', 100);
}
function joonista(){
    g.clearRect(0, 0, t.width, t.height);
    g.strokeStyle="#f20039";
    g.fillStyle="#f20039";
    g.beginPath()
    g.fillRect(0,163,490,40);
    g.stroke();
    g.fill();
    g.closePath();
    //---------------------------------------------------------------//
    g.strokeStyle="#dede99";
    g.fillStyle="#dede99";
    g.beginPath()
    g.arc(x, y, r, 0, 2*Math.PI, true);
    g.stroke();
    g.fill();
    g.closePath();
}
function liigu(){
    ysamm=ysamm+ykiirendus;
    if(kasSees(x+xsamm, y+ysamm)){
        y=Math.random() * (31 - 20) + 20;
        x=Math.random() * (300 - 20) + 20;
        ysamm=1;
    } else {
        x=x+xsamm;
        y=y+ysamm;
    }
    joonista();
}
function kasSees(uusX, uusY){
    if(uusX-r<0){return false;}
    if(uusX+r>t.width){return false;}
    if(uusY-r<0){return false;}
    if(uusY+r>t.height){return false;}
    if (uusY<149){return false}
    return true;
}
function mousePosClick(e){
    var tahvlikoht=t.getBoundingClientRect();
    var hx=e.clientX-tahvlikoht.left;
    var hy=e.clientY-tahvlikoht.top;
    x=hx;
    y=hy;
    ysamm=0;
}
