/*"user strick";

function Player(id){
	this.id = id;
	this.name = "player";
	this.listPositions = [];

}
//Atributo listPositions
//push(agregas un elemento) y le agregas position
User.prototype.addNewPosition = function(position,otro){
	this.listPositions.push(position);
};*/

"use strick";
function Player(id) {
	this.id = id;
	this.name = "player";
	this.listPositions = [];
	this.matrixPositions = [  [1, 1], [1, 2], [1, 3] ,
							  [2, 1], [2, 2], [2, 3] ,
							  [3, 1], [3, 2], [3, 3]   ];
}

Player.prototype.addNewPosition = function(button) {
	var celdaPosition =  parseInt( button.getAttribute("celda"));
	this.listPositions.push(celdaPosition);
};


Player.prototype.hasPositionByButton = function(button) {
	var celdaPosition =  parseInt( button.getAttribute("celda"));
	return  !(this.listPositions.indexOf(celdaPosition) != -1);
};

Player.prototype.getCoordinateByPosition = function(position) {
	var coordinate = this.matrixPositions[ position-1 ];
	return coordinate;
};