// // example code

// var gameBoard = {
//   createBoard: function (dimension, mount) {
//     var mount = document.querySelector(mount);
//     if (!dimension || isNaN(dimension) || !parseInt(dimension, 10)) {
//       return false;
//     } else {
//       dimension =
//         typeof dimension === "string" ? parseInt(dimension, 10) : dimension;
//       var table = document.createElement("table"),
//         row = document.createElement("tr"),
//         cell = document.createElement("td"),
//         rowClone,
//         cellClone;
//       var output;
//       for (var r = 0; r < dimension; r++) {
//         rowClone = row.cloneNode(true);
//         table.appendChild(rowClone);
//         for (var c = 0; c < dimension; c++) {
//           cellClone = cell.cloneNode(true);
//           rowClone.appendChild(cellClone);
//         }
//       }
//       mount.appendChild(table);
//       output = gameBoard.enumerateBoard(table);
//     }
//     return output;
//   },
//   enumerateBoard: function (board) {
//     var rows = board.getElementsByTagName("tr"),
//       text = document.createTextNode(""),
//       rowCounter = 1,
//       size = rows.length,
//       cells,
//       cellsLength,
//       cellNumber,
//       odd = false,
//       control = 0;
//     for (var r = size - 1; r >= 0; r--) {
//       cells = rows[r].getElementsByTagName("td");
//       cellsLength = cells.length;
//       rows[r].className = r % 2 == 0 ? "even" : "odd";
//       odd = ++control % 2 == 0 ? true : false;
//       size = rows.length;
//       for (var i = 0; i < cellsLength; i++) {
//         if (odd == true) {
//           cellNumber = --size + rowCounter - i;
//         } else {
//           cellNumber = rowCounter;
//         }
//         cells[i].className = i % 2 == 0 ? "even" : "odd";
//         cells[i].id = cellNumber;
//         cells[i].appendChild(text.cloneNode());
//         cells[i].firstChild.nodeValue = cellNumber;
//         rowCounter++;
//       }
//     }
//     var lastRow = rows[0].getElementsByTagName("td");
//     lastRow[0].id = "100";
//     var firstRow = rows[9].getElementsByTagName("td");
//     firstRow[0].id = "1";
//     return gameBoard;
//   },
// };
// gameBoard.createBoard(10, "#grid");

// function intialPosition() {
//   $("#1").append($("#player1"));
//   $("#1").append($("#player2"));
//   var currentPosition = parseInt($("#1").attr("id"));
//   return currentPosition;
// }
// var w = intialPosition();

// var face1 = new Image();
// face1.src = "http://s19.postimg.org/fa5etrfy7/image.gif";
// var face2 = new Image();
// face2.src = "http://s19.postimg.org/qb0jys873/image.gif";
// var face3 = new Image();
// face3.src = "http://s19.postimg.org/fpgoms1vj/image.gif";
// var face4 = new Image();
// face4.src = "http://s19.postimg.org/xgsb18ha7/image.gif";
// var face5 = new Image();
// face5.src = "http://s19.postimg.org/lsy96os5b/image.gif";
// var face6 = new Image();
// face6.src = "http://s19.postimg.org/4gxwl8ynz/image.gif";

// function rollDice() {
//   var randomdice = Math.floor(Math.random() * 6) + 1;
//   document.images["mydice"].src = eval("face" + randomdice + ".src");
//   if (randomdice == 6) {
//     alert("Congratulations! You got 6! Roll the dice again");
//   }
//   return randomdice;
// }
// var random1 = rollDice();
// var destination = w + random1;

// function move() {
//   $("#" + destination).append($("#player1"));
//   var x = parseInt($("#" + destination).attr("id"));
//   var random = rollDice();
//   destination = x + random;
//   //alert(x);
//   return destination;
// }

// $(document).ready(function () {
//   //$('#' + destination).delay(100).fadeOut().fadeIn('slow');
//   $("#" + destination)
//     .fadeIn(100)
//     .fadeOut(100)
//     .fadeIn(100)
//     .fadeOut(100)
//     .fadeIn(100);
// });
// var next = move();
