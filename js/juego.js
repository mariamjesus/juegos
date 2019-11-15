"use strict";

const lista = ['telefono', 'jabalina', 'pabellon', 'adjetivo', 'consulta'];
let palabra = [];
let mostrar = [];
let historialL = [];
let intentos = 5;
let letraS = document.getElementById('letra');
let comp = document.getElementById('comprobar');
let resul = document.getElementById('resul');
	
function dibujar () 
{
    resul.textContent = mostrar.join(' ');

}

function juego () 
{
    let listaAleatoria = _.random(lista.length - 1);
    let palabraAleatoria = lista[listaAleatoria];
    palabra = palabraAleatoria.split('');	//Para separar en letras

    for (let letra of palabra) 
	{
        mostrar.push('_');	//Dibujar guiones
    }

        dibujar();
}

function comprobar () 
{
    let letraUsuario = letraS.value;
    letraS.value = '';	//Vaciar el input
    for (const [posicion, letraAdivinar] of palabra.entries()) 
	{	//Recorremos todas las letras
        if (letraUsuario == letraAdivinar) 
		{
            mostrar[posicion] = letraAdivinar;
        }
    }
    
    dibujar();
}

juego(); 
