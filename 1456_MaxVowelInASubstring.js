// old detailed solution
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function (s, k) {
  let l = 0,
    r = 0,
    n = s.length;
  let count = 0;

  while (r < k) {
    if (checkVowels(s[r])) {
      count++;
    }
    r++;
  }

  let max = count;

  while (r < n) {
    if (checkVowels(s[r])) {
      count++;
    }

    if (checkVowels(s[l])) {
      count--;
    }

    max = Math.max(count, max);
    r++;
    l++;
  }

  return max;
};

var checkVowels = (l) => {
  if (l === "a" || l === "e" || l === "i" || l === "o" || l === "u") {
    return true;
  } else return false;
};

// ----------------------------------------------------------------------------------------------

// ----------------------------------------------------------------------------------------------
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function (s, k) {
  let l = 0,
    r = 0,
    n = s.length;
  let count = 0;

  while (r < k) {
    if (checkVowels(s[r])) count++;
    r++;
  }

  let max = count;

  while (r < n) {
    if (checkVowels(s[r])) {
      count++;
    }

    if (checkVowels(s[l])) {
      count--;
    }

    max = Math.max(count, max);
    r++;
    l++;
  }

  return max;
};

var checkVowels = (l) =>
  l === "a" || l === "e" || l === "i" || l === "o" || l === "u" ? true : false;
