// ? We have a  10 X 10 chessboard and we want to explore all the possible squares on the board that the knight can be at in exactly N moves.
// * It is placed at (i,j) coordinate initially. For a 10X10 chessboard (1,1) will be the top left corner and (10,10) will be the bottom right corner.
// ? Print a single integer denoting the number of blocks on the chessboard that the knight can be at in exactly N moves. 


let [i, j, n] = [3, 3, 1];
let board = [];

for (let i = 0; i < 10; i++) {
   let temp = [];
   for (let j = 0; j < 10; j++) {
      temp.push(0);
   } board.push(temp);
}

function followTheKnight(board, row, col, n) {

   if (row < 0 || row >= board.length || col < 0 || col >= board.length) return;
   if (n === 0) {
      board[row][col] = 1;
      return;
   }

   followTheKnight(board, row - 2, col + 1, n - 1);
   followTheKnight(board, row - 2, col - 1, n - 1);
   followTheKnight(board, row + 2, col + 1, n - 1);
   followTheKnight(board, row + 2, col - 1, n - 1);
   followTheKnight(board, row - 1, col + 2, n - 1);
   followTheKnight(board, row + 1, col + 2, n - 1);
   followTheKnight(board, row - 1, col - 2, n - 1);
   followTheKnight(board, row + 1, col - 2, n - 1);

} followTheKnight(board, i - 1, j - 1, n);

let count = 0;

for (let i = 0; i < board.length; i++) {
   for (let j = 0; j < board.length; j++) {
      if (board[i][j] === 1) count++;
   }
} console.log(count);

