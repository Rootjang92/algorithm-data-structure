// 검색에 가장 흔히 사용되는 알고리즘 중 하나

// 긴 문자열에서 짧은 문자열이 등장하는 횟수

// 가장 간단한 방법은 문자쌍을 다 확인하는 것.

// 1. 긴 문자열 반복문, 문자열 2개 인수
// 2. 짧은 문자열 반복문 일치하지 않으면 벗어남, 맞으면 다음 문자로 넘어감.
// 3. count 증가
// 4. count 반환


function naiveStringSearch(str1, str2) {
  let count = 0;

  for (let i = 0; i < str1.length; i++) {
    for (let j = 0; j < str2.length; j++) {
      if (str2[j] !== str1[i+j]) break;
      if (j === str2.length - 1) count++;
    }

  }

  return count;
};

console.log(naiveStringSearch("lorie loled", "lo"));