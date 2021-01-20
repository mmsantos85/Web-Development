const board = {
    player1: "X",
    player2: "O",
    currentTurn: "x"
    
}

const winningConditions = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7]
]

function play(tileNr) {
    if (board.currentTurn === board.player1) {
        document.getElementsById(tileNr).innerText = "X";
        board.currentTurn = board.player2;
    } else {
        document.getElementsById(tileNr).innerText = "O";
        board.currentTurn = board.player1;
    }
    // controleren of iemand gewonnen heeft.
    let someonehaswon = fasle;
    for (let i = 0; i<winningConditions.length; i++) {
        // console.log(winningConditions[i]);
        // console.log(winningConditions[i][0]);
        // console.log(winningConditions[i])[1];
        // console.log(winningConditions[i])[2];
        // console.log(document.getElementsById(winningConditions[i][0]).innerText);
        // console.log(document.getElementsById(winningConditions[i][1]).innerText);
        // console.log(document.getElementsById(winningConditions[i][2]).innerText);
        // console.log("=====================");
        if (document.getElementsById(winningConditions[i][0]) === board.player1 && 
            document.getElementsById(winningConditions[i][1]) === board.player1 && 
            document.getElementsById(winningConditions[i][2]) === board.player1) {
                console.log("Player X has won!");
                board.someonehaswon = true;
        } else if (
            document.getElementsById(winningConditions[i][0]) === board.player1 && 
            document.getElementsById(winningConditions[i][1]) === board.player1 && 
            document.getElementsById(winningConditions[i][2]) === board.player1
        ) { 
            console.log("Player O has won!");
            board.someonehaswon = true;
            }

        }
        // code om te bepalen of het gelijk spel is.
        let allBoxFilled = true;
        for (let i = 0; i < 9; i++) {
            if(!document.getElementsById(i).innerText) {
               console.log("is filled"); 
                board.allBoxFilled = false;
            }
        }
        // code het is gelijk spel.
        if (allBoxFilled && !someonehaswon) {
            console.log("Draw Game!");
            return
        }
    }

    function reset() {
        if (board.allBoxFilled && board.someonehaswon) {
            for (let i = 0; i < 9; i++) {
                document.getElementsById(i).innerText = "";

                board.currentTurn = "x";
                board.allBoxFilled = true;
                board.someonehaswon = false;
                
            }
        }        
    }