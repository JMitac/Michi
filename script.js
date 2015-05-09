/*function load(){
  var botones = document.getElementsByTagName("button")

  for(var index in botones){
    console.log(botones[index]);
  }
}

load();*/

/*
function load(){
  var array = ["RATA", "QUESO", "BONLE"];
  for(var index in array){
    console.log(array[index]);
  }
}

load();*/

/*
function load(){
  var array = ["RATA", "QUESO", "BONLE"];
  for(var index of array){
    console.log(index);
  }
}

load();
*/

/*
function load(){
  var botones = document.getElementsByTagName("button");
  console.log(botones);
}
*/

/*
function load(){
  var botones = document.getElementsByTagName("button");
  console.log(botones);
  for(var boton of botones){
    boton.addEventListener("click", function(){
      console.log(this.id);
    }); 
  }
}
*/

/*
function load(){
  var botones = document.getElementsByTagName("BUTTON");
  console.log(botones);
  for(var index in botones){
	  if(  botones[index].nodeName  == 'BUTTON'  ){
      botones[index].addEventListener("click", function(){
        console.log(this.id);
      }); 
    }

  }
}*/

/*
function load(){
    var botones = document.getElementById("tablero");
    console.log(botones);

}*/

"use strick";// http://www.w3schools.com/js/js_strict.asp
window.addEventListener("load",load);

function load(){
	//Que cuando carge me cree dos Jugadores
	var playerOne = new Player(1);
	var playerTwo = new Player(2);
	var listPlayers = [];
	var turno = 0;
	//Para que se muestre en el input a quien le toca(TURNO)
	var consola = document.getElementById("consola");

	//Funcion Principal: La funcion se va a volver a llamar automaticamente
	(function init(){
		fillListPlayers();
	})();//(); se llama automaticamente

	//Para llenar las Lista de Jugadores
	function fillListPlayers(){
		listPlayers.push(playerOne);
		listPlayers.push(playerTwo);
	}


	//index viene a ser 1 2 3 ...
	var idButtons = [1,2,3,4,5,6,7,8,9];
	for(var index of idButtons){
		var button = document.getElementById("celda"+index);
		//Se le agrega un evento "click"  y se corre una funcion
		button.addEventListener("click", function(){
		   selectButton(this);
		   //this para que te pase los parametros button
		});
    }
    //La Funcion Recibe los Parametros "This"
    //Console.log = Imprime Ejm: "celda7"
    function selectButton(e){
    	//A Player vamos agregando en el array las Posicion(o seas el Turno de los Players)
    	var currentPlayer = listPlayers[turno];
    	if(hasPositionByButton(e)){
	    	currentPlayer.addNewPosition(e);
	    	//Que imprima en el input el turno que le toca
	    	setTurnOnView();
	    	//Para Dibujar en el Button
	    	drawButton(e);
	    	//Para Validar si hay un ganador
	    	ValidateWinner(currentPlayer);    	
	        //Cambiamos el Turno, al que le toca
	        changeTurn();
	    }
    }

    function changeTurn(){
		//turno = turno == 0 -> Si turno = turno es igual a 0
		//? 1 entonces -> turno = 1
		//: 0 caso contrario -> Turno = 0
    	//? Entonces
    	/*
    	if(turno == 0)
    		turno = 1
    	else
    		turno = 0
    	*/
    	turno = turno == 0 ? 1 : 0;
    }
    function hasPositionByButton(button){
        return playerOne.hasPositionByButton(button) && playerTwo.hasPositionByButton(button);
    }
    //Funcion que Imprime en el Input el Turno del Player
    function setTurnOnView(){
    	consola.innerHTML = "PLAYER" + (turno + 1);
    }

    //Funcion para Validar el Turno del Jugador
    function ValidateWinner(currentPlayer){
    	//var currentPlayer = listPlayers[turno];
    	/*var currentPlayerPosition = currentPlayer.listPositions[a.length - 1];//Obtengo una array con las posiciones
                                                                 //en las que se ah hecho click
        console.log("Player "+ (currentPlayer.id )+ " ==> positions : " + currentPlayerPositions);
        
        if (currentPlayerPositions.length >= 3){
            for (var position of currentPlayer.listPositions) {
                findNextPosition(position, currentPlayer);
            }
        }else{
            console.log("Aun le falta completar turnos para poder ganar");
        }*/
    }

    function drawButton(button){
        button.innerHTML =turno == 0 ? "X": "O";
    }

    
}