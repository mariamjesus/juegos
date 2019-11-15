const lista = ['telefono', 'jabalina', 'pabellon', 'adjetivo', 'consulta'];
let palabra = [];
let mostrar = [];
let historialL = [];
let intentos = 5;
let letraS = document.getElementById('letra');
let comp = document.getElementById('comprobar');
let resul = document.getElementById('resul');
let intent = document.getElementById('intentos');
let hist = document.getElementById('historial');

function dibujar () 
{
    resul.textContent = mostrar.join(' ');
	intent.textContent = intentos;
    hist.textContent = historialL.join(' ');
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
    letraS.focus();
    for (const [posicion, letraAdivinar] of palabra.entries()) 
	{	//Recorremos todas las letras
        if (letraUsuario == letraAdivinar) 
		{
           ostrar[posicion] = letraAdivinar;
        }
    }


		
				
    if (!palabra.includes(letraUsuario)) 
	{
        intentos -= 1;                      
		historialL.push(letraUsuario);
    }
       
    fin();    
    dibujar();
}

		
			
function fin () 
{
    if (!mostrar.includes('_')) 
	{
            alert('Has ganado!!!');
            location.reload(true);
    }
    if (intentos == 0) 
	{
          alert('Has Perdido!!! Era: ' + palabra.join(''));
          location.reload(true);
	}
}

 juego(); 
