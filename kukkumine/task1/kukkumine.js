let x=230 ,y;
let r;
let ysamm;
let t, g; //tahvel, graafiline kontekst
//liigutab palli liigu() funktsiooniga; 100 - tähendab 10 korda sekundis
function start(){
    y=15;
    r=parseInt(document.getElementById("radius").value);
    console.log(document.getElementById("radius").value);
    console.log(document.getElementById("fall").value);
    ysamm=parseInt(document.getElementById("fall").value);
    t=document.getElementById("tahvel");
    g=t.getContext("2d");
    setInterval('liigu()', 100);
}
//ball drawing
function joonista(){
    g.clearRect(0, 0, t.width, t.height);
    g.strokeStyle="#636be0";
    g.fillStyle="#636be0";
    g.beginPath()
    g.arc(x, y, r, 0, 2*Math.PI, true);
    g.stroke();
    g.fill();
    g.closePath();

    //g.strokeStyle="darkviolet";
    //g.fillStyle="darkviolet";
    //g.beginPath()
    //g.arc(x+6, y-4, r-16, 0, 2*Math.PI, true);
    //g.stroke();
    //g.fill();
    //g.closePath();

    //g.strokeStyle="darkviolet";
    //g.fillStyle="darkviolet";
    //g.beginPath()
    //g.arc(x-6, y-4, r-16, 0, 2*Math.PI, true);
    //g.stroke();
    //g.fill();
    //g.closePath();

}
//kukkumine alla(y)
function liigu(){
    y=y+ysamm;
    joonista();
}
