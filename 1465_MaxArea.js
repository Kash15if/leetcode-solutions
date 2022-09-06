/**
 * @param {number} h
 * @param {number} w
 * @param {number[]} horizontalCuts
 * @param {number[]} verticalCuts
 * @return {number}
 */
var maxArea = function (h, w, horizontalCuts, verticalCuts) {
  let maxH = 0,
    maxV = 0;
  horizontalCuts.sort((a, b) => a - b);
  verticalCuts.sort((a, b) => a - b);

  maxH = Math.max(
    horizontalCuts[0],
    h - horizontalCuts[horizontalCuts.length - 1]
  );
  for (let i = 0; i < horizontalCuts.length - 1; i++) {
    maxH = Math.max(horizontalCuts[i + 1] - horizontalCuts[i], maxH);
  }

  maxV = Math.max(verticalCuts[0], w - verticalCuts[verticalCuts.length - 1]);
  for (let i = 0; i < verticalCuts.length - 1; i++) {
    maxV = Math.max(verticalCuts[i + 1] - verticalCuts[i], maxV);
  }

  return (BigInt(maxH) * BigInt(maxV)) % 1000000007n;
};
