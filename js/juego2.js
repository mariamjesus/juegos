"use strict";

function aleatorioNum(){
    var nJugadores=2;

    var partida=new Array(nJugadores);
    var i,j;
 //FOR BIDIMENSIONAL PARA RELLENAR JUGADORES CON SUS CARTAS
    for(i=0;i<partida.length;i++){
        partida[i]=new Array(2);//creo array dibimensional para las cartas, 2
        for(j=0;j<partida[i].length;j++){
            partida[i][j]= Math.floor(Math.random() * (13 - 1)) + 1;//creo aleatorios
        }//end for j para carta     
    }//end for i para el jugador
   
    document.getElementById("num1").innerHTML="carta primera: " + partida[0][0] + " " + "carta segunda: " + partida[0][1];
    document.getElementById("num2").innerHTML="carta primera: " + partida[1][0] +  " " + "carta segunda: " +partida[1][1];
   
    for(i=0;i<partida.length;i++){ //for para sacar el mayor de la carta
        partida[i].sort(function(a, b) { //function para ordenar num en array
            return a - b;
        }); //posicion donde esta guardada el mayor
        var jug1=partida[0][1];
        var jug2=partida[1][1];
    }
    document.getElementById("demo").innerHTML="carta más alta del jugador 1:"+ " "+ jug1 +"carta más alta del jugador 2:"+ " "+ jug2;

    //if para comparar cartas mas alta de cada jugador
    if(jug1>jug2){
        document.getElementById("resultado").innerHTML="el jugador 1";
    }else if(jug1<jug2){
        document.getElementById("resultado").innerHTML="el jugador 2";
    }else if(jug1===jug2){
        document.getElementById("resultado").innerHTML="no hay ganador, nuevos iguales";

    }
    
}//end funct 