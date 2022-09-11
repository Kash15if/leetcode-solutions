/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function (grid) {
  let m = grid.length,
    n = grid[0].length,
    max = 0;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      let x = finMaxArea(grid, i, j, m, n);
      if (x > max) {
        max = x;
      }
    }
  }

  return max;
};

var finMaxArea = function (grid, i, j, m, n) {
  if (i >= m || j >= n || i < 0 || j < 0 || grid[i][j] <= 0) {
    return 0;
  }

  let val = grid[i][j];
  grid[i][j] = -1;

  return (
    1 +
    finMaxArea(grid, i, j - 1, m, n) +
    finMaxArea(grid, i, j + 1, m, n) +
    finMaxArea(grid, i - 1, j, m, n) +
    finMaxArea(grid, i + 1, j, m, n)
  );

  grid[i][j] = val;
};
