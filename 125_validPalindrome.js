/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  let res = "";

  for (let i = 0; i < s.length; i++) {
    if (
      (s.charCodeAt(i) > 96 && s.charCodeAt(i) < 123) ||
      (s.charCodeAt(i) > 47 && s.charCodeAt(i) < 58)
    ) {
      res += s[i];
    } else if (s.charCodeAt(i) > 64 && s.charCodeAt(i) < 91) {
      res += String.fromCharCode(s.charCodeAt(i) + 32);
    }
  }

  return checkPalindrome(res);
};

function checkPalindrome(st) {
  let r = st.length - 1,
    l = 0;

  while (l < r) {
    if (st[l] == st[r]) {
      l++;
      r--;
    } else {
      return false;
    }
  }

  return true;
}
