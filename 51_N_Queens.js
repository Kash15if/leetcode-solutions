/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function (n) {
  let out = [],
    arr = [];

  let tempArr = "";

  for (let i = 0; i < n; i++) {
    tempArr += ".";
  }

  for (let i = 0; i < n; i++) {
    arr.push(tempArr);
  }

  nQueenMethod(0, n, [...arr], out);

  return out;
};

function nQueenMethod(i, n, arr, out) {
  if (i > n) return;

  if (i === n) {
    out.push([...arr]);
    return;
  }

  for (let x = 0; x < n; x++) {
    if (validate([...arr], i, x)) {
      let rowString = arr[i];
      arr[i] = replaceChar(rowString, "Q", x);
      nQueenMethod(i + 1, n, [...arr], out);
      arr[i] = rowString;
    }
  }

  return;
}

function validate(board, row, col) {
  let n = board.length;
  for (let i = 0; i < n; i++) {
    // checking if there is a queen in the same column
    if (board[i][col] == "Q") return false;
    // checking if there is a queen in the same diagonal (left to right)
    if (row - i >= 0 && col - i >= 0 && board[row - i][col - i] == "Q")
      return false;
    if (row - i >= 0 && col + i < n && board[row - i][col + i] == "Q")
      return false;
  }

  return true;
}

function replaceChar(origString, replaceChar, index) {
  let newStringArray = origString.split("");

  newStringArray[index] = replaceChar;

  let newString = newStringArray.join("");

  return newString;
}
