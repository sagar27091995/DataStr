function StartGame(){
    document.turn ="X";
}
function NxtMove(Square){
  Square.innerHTML = document.turn;
  console.log(document.turn);

  Switch();
}
function Switch(){
    if(document.turn === "X"){
        document.turn = "O";
    }else{
        document.turn = "X";
    }
}
