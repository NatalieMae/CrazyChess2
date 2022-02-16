//From Game example "making a Web Game part 7"

//Create the playable character

//Create the clickable/draggable square on the chessBoard 

// const mpp = myPlayablePieces()  
// const npp = nonPlayablePieces()
// var dragged;

// doucment.addEventListener('drag', function(event){

// }, false);

// function moveGamePieces(whRook, whKnight, whBishop, whKing, whQueen, whPawn) {
//             let rook = document.querySelector(".whRook");
//             let knight = document.querySelector(".whKnight");
//             let bishop = document.querySelector(".whBishop");
//             let king = document.querySelector(".whKing");
//             let queen = document.querySelector(".whQueen");
//             let pawn = document.querySelector(".whPawn");
//     }

var dragged;

/* events fired on the draggable target */
document.addEventListener("drag", function(event) {

}, false);

document.addEventListener("dragstart", function(event) {
  // store a ref. on the dragged elem
  dragged = event.target;
  // make it half transparent
  event.target.style.opacity = .5;
}, false);

document.addEventListener("dragend", function(event) {
  // reset the transparency
  event.target.style.opacity = "";
}, false);

/* events fired on the drop targets */
document.addEventListener("dragover", function(event) {
  // prevent default to allow drop
  event.preventDefault();
}, false);

document.addEventListener("dragenter", function(event) {
  // highlight potential drop target when the draggable element enters it
  if (event.target.className == "dropzone") {
    event.target.style.background = "purple";
  }

}, false);

document.addEventListener("dragleave", function(event) {
  // reset background of potential drop target when the draggable element leaves it
  if (event.target.className == "dropzone") {
    event.target.style.background = "";
  }

}, false);

document.addEventListener("drop", function(event) {
  // prevent default action (open as link for some elements)
//   event.preventDefault();
  // move dragged elem to the selected drop target
  if (event.target.className == "dropzone") {
    event.target.style.background = "";
    dragged.parentNode.removeChild( dragged );
    event.target.appendChild( dragged );
  }
}, false);
