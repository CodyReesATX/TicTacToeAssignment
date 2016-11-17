
var turn = 0;
var gameOver = false;

function incrementTurn() {
  turn +=1;
}

for (var i = 1; i <= 9; i++) {
    createListener(i)
}

createResetListener();

function createListener(i){
	$('#' + i).click(function(event) {
       if (!gameOver){
	       var playerIcon = '';
	       var nextPlayerIcon = '';
	       var playerColor = '';
	       var xIsNext = turn % 2 === 1;
	       if (xIsNext) {
	         playerIcon = 'X';
	         nextPlayerIcon = 'O';
	         playerColor = '#7FCC19'
	       } else {
	         playerIcon = 'O';
	         nextPlayerIcon = 'X';
	         playerColor = '#F83313'
	       }

	       $('#' + i).text(playerIcon).css("color",playerColor);
	       updateStatus(nextPlayerIcon + "'s turn", "#bad7ff", false);

	       checkForWinners()

	       incrementTurn();
      }
       console.log(playerIcon);
       console.log($('#' + i));
       console.log(turn);
    })
}

function createResetListener(){
	$('#reset').click(function(event) {
   		resetBoard();
   		console.log("Reset");
    })
}

function resetBoard(){
	for (var i = 1; i <= 9; i++) {
    	$('#' + i).text("");
	}
	turn = 0;
	updateStatus("New Game", "#bad7ff");
	//$('#statusBox').hide();
	gameOver = false;
}

function updateStatus(message, color, isGameOver){
	$('#statusMessage').text(message).css("background-color", color )
	$('#statusBox').css("background-color", color )
	if (color === '#cbeba1'){
		//Check Icon
		$('#statusIcon').html('&#10003').css("background-color", '#7fcd1b')
		$('#statusCloseText').css("color", '#7fcd1b')
	}else {
		//Info Icon
		$('#statusIcon').html(' i ').css("background-color", '#3d8fff')
		$('#statusCloseText').css("color", '#3d8fff')
	}
	gameOver = isGameOver;
}

function checkForWinners(){
	var values = [1,2,3,4,5,6,7,8,9].map(function(i){
		return $('#' + i).text();
	})

	//first row
	if (values[0] === 'X' && values[1] === 'X' && values[2] === 'X'){
		updateStatus("X won!", "#cbeba1", true);
	} else if (values[0] === 'O' && values[1] === 'O' && values[2] === 'O'){
		updateStatus("O won!", "#cbeba1", true);
	//Second Row
	} else if (values[3] === 'X' && values[4] === 'X' && values[5] === 'X'){
		updateStatus("X won!", "#cbeba1", true);
	} else if (values[3] === 'O' && values[4] === 'O' && values[5] === 'O'){
		updateStatus("O won!", "#cbeba1", true);
	//Third Row
	} else if (values[6] === 'X' && values[7] === 'X' && values[8] === 'X'){
		updateStatus("X won!", "#cbeba1", true);
	} else if (values[6] === 'O' && values[7] === 'O' && values[8] === 'O'){
		updateStatus("O won!", "#cbeba1", true);
	//First Column
	} else if (values[0] === 'X' && values[3] === 'X' && values[6] === 'X'){
		updateStatus("X won!", "#cbeba1", true);
	} else if (values[0] === 'O' && values[3] === 'O' && values[6] === 'O'){
		updateStatus("O won!", "#cbeba1", true);
	//Second Column
	} else if (values[1] === 'X' && values[4] === 'X' && values[7] === 'X'){
		updateStatus("X won!", "#cbeba1", true);
	} else if (values[1] === 'O' && values[4] === 'O' && values[7] === 'O'){
		updateStatus("O won!", "#cbeba1", true);
	//Third Column
	} else if (values[2] === 'X' && values[5] === 'X' && values[8] === 'X'){
		updateStatus("X won!", "#cbeba1", true);
	} else if (values[2] === 'O' && values[5] === 'O' && values[8] === 'O'){
		updateStatus("O won!", "#cbeba1", true);
	//Diagonal 1
	} else if (values[0] === 'X' && values[4] === 'X' && values[8] === 'X'){
		updateStatus("X won!", "#cbeba1", true);
	} else if (values[0] === 'O' && values[4] === 'O' && values[8] === 'O'){
		updateStatus("O won!", "#cbeba1", true);
	//Diagonal 2
	} else if (values[6] === 'X' && values[4] === 'X' && values[2] === 'X'){
		updateStatus("X won!", "#cbeba1", true);
	} else if (values[6] === 'O' && values[4] === 'O' && values[2] === 'O'){
		updateStatus("O won!", "#cbeba1", true);
	//Check for cats game
	} else if (turn === 8){
		updateStatus("Cat's Game!", "#bad7ff", true);
	}

	


}