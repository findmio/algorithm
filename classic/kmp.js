// 以 LeetCode 28题：实现 strStr() 为例
// 实现 kmp 算法

const s1 = 'abababc';

const s2 = 'ababc';

// 暴力解决 O(m*n)
// function findIndex(s1, s2) {
//   for (let m = 0; m < s1.length; m++) {
//     for (let n = 0; n < s2.length; n++) {
//       const item1 = s1[n + m];
//       const item2 = s2[n];
//       if (item1 !== item2) {
//         break;
//       }

//       if (n === s2.length - 1) {
//         return m;
//       }
//     }
//   }
//   return -1;
// }

// KMP 算法 O(m+n)
function findIndex(s1, s2) {
  const next = [0];
  for (let i = 1, j = 0; i < s2.length; i++) {
    while (j > 0 && s2[i] !== s2[j]) {
      j = next[j - 1];
    }
    if (s2[i] === s2[j]) {
      j++;
    }
    next[i] = j;
  }
  for (let i = 0, j = 0; i < s1.length; i++) {
    while (j > 0 && s1[i] !== s2[j]) {
      j = next[j - 1];
    }
    if (s1[i] === s2[j]) {
      j++;
    }
    if (j === s2.length) {
      return i - s2.length + 1;
    }
  }
  return -1;
}
