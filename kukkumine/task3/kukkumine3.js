var x=250, y=20, r=20;
var ysamm=1, ykiirendus=0.4;
var t, g; //tahvel, graafiline kontekst
function start(){
    t=document.getElementById("tahvel");
    g=t.getContext("2d");
    setInterval('liigu()', 120);
}
function joonista(){
    g.clearRect(0, 0, t.width, t.height);
    g.strokeStyle="#5f4875";
    g.fillStyle="#5f4875";
    g.beginPath()
    g.fillRect(0,163,490,40);
    g.stroke();
    g.fill();
    g.closePath();

    g.strokeStyle="#636be0";
    g.fillStyle="#636be0";
    g.beginPath()
    g.arc(x, y, r, 0, 2*Math.PI, true);
    g.stroke();
    g.fill();
    g.closePath();
}
function liigu(){
    if (y>149){
        y+=ysamm/4;
    }
    else{
        ysamm=ysamm+ykiirendus;
        y+=ysamm;
    }
    joonista();
}
function hiirAlla(e){
    var tahvlikoht=t.getBoundingClientRect();
    var hx=e.clientX-tahvlikoht.left;
    var hy=e.clientY-tahvlikoht.top;
    x=hx;
    y=hy;
    if (r>2){
        r-=1;
    }
    ysamm=0;
}