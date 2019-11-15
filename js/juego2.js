"use strict";

function aleatorioNum(){
    var nJugadores=3;
    var jug1CartMax, jug2CartMax, jug3CartMax;
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
    document.getElementById("num3").innerHTML="carta primera: " + partida[2][0] +  " " + "carta segunda: " +partida[2][1];
   
    for(i=0;i<partida.length;i++){ //for para sacar el mayor de la carta
        partida[i].sort(function(a, b) { //function para ordenar num en array
            return a - b;
        }); //posicion donde esta guardada el mayor
            
    }//end for
    jug1CartMax=partida[0][1];
    jug2CartMax=partida[1][1];
    jug3CartMax=partida[2][1];
    document.getElementById("demo").innerHTML="carta más alta del jugador 1:"+ " "+ jug1CartMax +"carta más alta del jugador 2:"+ " "+ jug2CartMax+"carta más alta del jugador 3:"+ " "+ jug3CartMax;
   

    compararNum(jug1CartMax, jug2CartMax, jug3CartMax);
} //end function 

function compararNum(jug1CartMax, jug2CartMax, jug3CartMax){
    //if para comparar cartas mas alta de cada jugador
    if (jug1CartMax>jug2CartMax  && jug1CartMax>jug3CartMax){
        document.getElementById("resultado").innerHTML="el jugador 1";
    } else if (jug1CartMax<jug2CartMax && jug3CartMax<jug2CartMax){
        document.getElementById("resultado").innerHTML="el jugador 2";
    } else if (jug3CartMax>jug1CartMax && jug3CartMax>jug2CartMax){
        document.getElementById("resultado").innerHTML="el jugador 3";
    } else{
        document.getElementById("resultado").innerHTML="no hay ganador, nuevos iguales";
        aleatorioNum();
    }
    
}//end funct 
