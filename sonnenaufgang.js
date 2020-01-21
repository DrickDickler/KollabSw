'use strict';

let canvas = document.querySelector('#canvas');
let ctx = canvas.getContext('2d');
let wolkenani = 0;
let wolkenbreite = 250;
let wellenhoehe = 10;
let wolkengeschwindigkeit=0.5;
let wellengeschwindigkeit=0.5;
let sonnengeschwindigkeit =0.8;
let sonnenstand_x=0;
let sonnenstand_y=0;


animate();


function zeichne(){
    background();
    sonne(sonnenstand_x,sonnenstand_y);
    sonne(sonnenstand_x,sonnenstand_y);
    wolke(wolkenani,80,wolkenbreite,50);
    water(wellenhoehe);

}

function animate(){
    requestAnimationFrame(animate)
    {
        wolkenani += wolkengeschwindigkeit;
        if (wolkenani <= 0 || wolkenani >= 600-wolkenbreite ) {
            wolkengeschwindigkeit = -wolkengeschwindigkeit;
        }
        wellenhoehe += wellengeschwindigkeit;
        if (wellenhoehe <= 5 || wellenhoehe >= 20 ) {
            wellengeschwindigkeit = -wellengeschwindigkeit;
        }
        sonnenstand_x += sonnengeschwindigkeit;
        if (sonnenstand_x <= -200 || sonnenstand_x >= +200 ) {
            sonnengeschwindigkeit = -sonnengeschwindigkeit

        }
        sonnenstand_y=(sonnenstand_x*sonnenstand_x)/115

        zeichne();
    }
};
function background (){
    ctx.beginPath();
    ctx.strokeStyle = 'blue';
    var blau = 200-sonnenstand_y/2
    var rot = 58 -sonnenstand_y/2
    var gruen = 91-sonnenstand_y/2
    ctx.fillStyle = "rgb("+rot+", "+gruen+","+blau+")"
    ctx.rect(0,0, 600, 400);
    ctx.stroke();
    ctx.fill();
    ctx.closePath();
}
function sonne(x_pos,y_pos){
    ctx.beginPath();
    ctx.arc(300+x_pos, 35+y_pos,30,0,360);
    ctx.strokeStyle ="white";
    var image = new Image();
    image.src = 'paket.png';
        ctx.fillStyle ="green";
    ctx.fill();
    ctx.stroke();

    ctx.closePath();

}
function wolke(x_pos,y_pos,breite,hoehe) {

    ctx.beginPath();
    ctx.strokeStyle = 'grey';
    ctx.fillStyle = 'lightgrey';
    ctx.moveTo(x_pos, y_pos);
    ctx.quadraticCurveTo(x_pos+(breite/4),y_pos-(hoehe/1.5), x_pos+(breite/2),y_pos);
    ctx.stroke();
    ctx.closePath();
    ctx.moveTo(x_pos+(breite/6), y_pos);
    ctx.quadraticCurveTo(x_pos+(breite/6*2),y_pos-hoehe, x_pos+(breite),y_pos);
    ctx.stroke();
    ctx.closePath();
    ctx.fill();

}
function water(wellenhoehe){

    ctx.beginPath();
    ctx.strokeStyle = 'white';
    ctx.fillStyle = 'cyan';
    ctx.moveTo(0, 250+wellenhoehe);

    for (let i = 0; i <10 ; i++) {

        ctx.strokeStyle = 'white';
        ctx.fillStyle = 'cyan';
        ctx.moveTo(0+i*60, 250+wellenhoehe);
        ctx.quadraticCurveTo(i*60+45,250-wellenhoehe,i*60+60+wellenhoehe,250+wellenhoehe)
        ctx.stroke();
        ctx.fill()
        ctx.closePath()

    }
    ctx.beginPath();
    ctx.strokeStyle = 'cyan';
    ctx.fillStyle = 'cyan';
    ctx.rect(0,250+wellenhoehe, 600, 250-wellenhoehe);
    ctx.stroke();
    ctx.fill();
    ctx.closePath();
}
