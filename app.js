let player1wins = 0;
let player2wins = 0;

function playgame() {
  if (player1wins < 3 && player2wins < 3) {
    let player1H = 100;
    let player2H = 100;
    while (player1H > 0 && player2H > 0) {
      shoot2 = Math.floor(Math.random() * 6);
      player1H -= shoot2;
      shoot1 = Math.floor(Math.random() * 6);
      player2H -= shoot1;
    }
    if (player1H > 0) {
      player1wins += 1;
      // console.log("player1:" + player1wins)
      document.getElementById("p1").innerHTML = player1wins;
    } else {
      player2wins += 1;
      // console.log("player2:" + player2wins)
      document.getElementById("p2").innerHTML = player2wins;
    }
  }
  if (player1wins >= 3) {

    document.getElementById("final").innerHTML = "Player1 won the match!";
  }
  if (player2wins >= 3) {
    document.getElementById("final").innerHTML = "Player2 won the match!";
  }
}
