var x=230, y, r=10;
var ysamm=5, ykiirendus=0.6;
var t, g; //tahvel, graafiline kontekst
function start(){
    y=20;
    r=parseInt(document.getElementById("radius").value);
    ykiirendus=parseInt(document.getElementById("fall").value);
    t=document.getElementById("tahvel");
    g=t.getContext("2d");
    setInterval('liigu()', 100);
}
function joonista(){
    g.clearRect(0, 0, t.width, t.height);
    g.strokeStyle="#636be0";
    g.fillStyle="#636be0";
    g.beginPath()
    g.arc(x, y, r, 0, 2*Math.PI, true);
    g.stroke();
    g.fill();
}
function liigu(){
    ysamm=ysamm+ykiirendus;
    y=y+ysamm;
    joonista();
}