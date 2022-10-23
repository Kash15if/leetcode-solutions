function initialize_2d_IntArray(m, n) {
  let arr = new Array(m);

  for (let i = 0; i < m; i++) {
    arr[i] = new Array(n);
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      arr[i][j] = false;
    }
  }

  return arr;
}
