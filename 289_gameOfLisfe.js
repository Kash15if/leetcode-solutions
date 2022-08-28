/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function (board) {
  // let out = board.map((item) => item.slice());

  let n = board.length;
  let m = board[0].length;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      let l = 0,
        r = 0,
        t = 0,
        b = 0,
        lb = 0,
        lt = 0,
        rt = 0,
        rb = 0;

      if (i > 0 && j > 0) {
        lt = board[i - 1][j - 1];
      }

      if (i > 0 && j < m - 1) {
        rt = board[i - 1][j + 1];
      }

      if (i < n - 1 && j > 0) {
        lb = board[i + 1][j - 1];
      }

      if (i < n - 1 && j < m - 1) {
        rb = board[i + 1][j + 1];
      }

      if (i > 0) {
        t = board[i - 1][j];
      }

      if (j > 0) {
        l = board[i][j - 1];
      }

      if (i < n - 1) {
        b = board[i + 1][j];
      }

      if (j < m - 1) {
        r = board[i][j + 1];
      }

      let temp = l + r + t + b + lb + lt + rt + rb;
      // console.log(l, r, t, b, lb, lt, rt, rb);
      console.log(temp, i, j);

      if (temp < 2) {
        board[i][j] = 0;
      } else if (temp === 2) {
        board[i][j] = board[i][j];
      } else if (temp === 3) {
        board[i][j] = 1;
      } else {
        board[i][j] = 0;
      }
    }
  }

  return board;
};
