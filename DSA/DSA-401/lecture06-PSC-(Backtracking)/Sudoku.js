// * Sudoku is one of the most popular puzzle games of all time. 
// ? The goal of Sudoku is to fill a 9×9 grid with numbers so that each row, column and 3×3 section contain all of the digits between 1 and 9.

let board = [
   [0, 4, 0, 0, 0, 0, 1, 7, 9],
   [0, 0, 2, 0, 0, 8, 0, 5, 4],
   [0, 0, 6, 0, 0, 5, 0, 0, 8],
   [0, 8, 0, 0, 7, 0, 9, 1, 0],
   [0, 5, 0, 0, 9, 0, 0, 3, 0],
   [0, 1, 9, 0, 6, 0, 0, 4, 0],
   [3, 0, 0, 4, 0, 0, 7, 0, 0],
   [5, 7, 0, 1, 0, 0, 2, 0, 0],
   [9, 2, 8, 0, 0, 0, 0, 6, 0]
];

function sudokuSolver(board, row, col) {
   if (row === board.length) {
      console.log(board);
      return;
   }

   let nextRow = 0;
   let nextCol = 0;

   if (col === board.length - 1) {
      nextRow = row + 1;
      nextCol = 0;
   } else {
      nextRow = row
      nextCol = col + 1;
   }

   if (board[row][col] != 0) sudokuSolver(board, nextRow, nextCol);
   else {
      for (let i = 1; i <= 9; i++) {
         if (checkSafe(board, row, col, i)) {
            board[row][col] = i;
            sudokuSolver(board, nextRow, nextCol);
            board[row][col] = 0;
         }
      }
   }
} sudokuSolver(board, 0, 0);

function checkSafe(board, row, col, value) {
   // * vertical check ->
   for (let i = 0; i < board.length; i++) {
      if (board[i][col] === value) return false;
   }

   // * horizontal check ->
   for (let i = 0; i < board.length; i++) {
      if (board[row][i] === value) return false;
   }

   let x = Math.floor(row / 3) * 3;
   let y = Math.floor(col / 3) * 3;

   // * grid check ->
   for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
         if (board[x + i][y + j] === value) return false;
      }
   }

   return true;
}