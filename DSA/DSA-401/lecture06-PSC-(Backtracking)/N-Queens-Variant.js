// ? The n-queens puzzle is the problem of placing n queens on an n×n chessboard such that no two queens attack each other.
// * Given an integer n, print the number of distinct solutions to the n-queens puzzle.

const n = 4; // output -> 2;
let board = [];

for (let i = 0; i < n; i++) {
   let temp = [];
   for (let j = 0; j < n; j++) {
      temp.push(0);
   } board.push(temp);
}

let count = 0;

function NQueens(board, row, n) {
   if (row === n) {
      count++;
      return;
   }

   for (let i = 0; i < n; i++) {
      if (checkSafe(board, row, i)) {
         board[row][i] = 1;
         NQueens(board, row + 1, n);
         board[row][i] = 0;
      }
   }
} NQueens(board, 0, n);

console.log(count);

function checkSafe(board, row, col) {
   // * vertical check ->
   for (let i = 0; i < row; i++) {
      if (board[i][col] == 1) return false;
   }

   // * up right diagonal ->
   for (let i = row - 1, j = col + 1; i >= 0 && j < board.length; i--, j++) {
      if (board[i][j] == 1) return false;
   }

   // * up left diagonal ->
   for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
      if (board[i][j] == 1) return false;
   }

   return true;
}
