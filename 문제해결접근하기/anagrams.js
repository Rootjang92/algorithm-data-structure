// 2개의 string이 있을 때, 각 문자의 횟수, 순서를 비교하여 일치하면 true 아니면 false

// 내가 짠 코드
function validAnagram(str1, str2) {
  // 각 문자열의 길이는 같아야 하는지?
  // 공백, 문자, 특수문자, 소문자 대문자는 어떻게 구분할지??
  if (str1.length !== str2.length) return false;

  let validAnagramObj1 = {};
  let validAnagramObj2 = {};

  for (let val of str1) {
    val = val.toLowerCase();
    validAnagramObj1[val] = (validAnagramObj1[val] || 0) + 1;
  }

  for (let val of str2) {
    val = val.toLowerCase();
    validAnagramObj2[val] = (validAnagramObj2[val] || 0) + 1;
  }

  // 만약에 해당하는 키가 없거나, 키의 값이 일치하지 않으면 false
  for (let val in validAnagramObj1) {
    if (!(val in validAnagramObj2)) return false;
    if (validAnagramObj1[val] !== validAnagramObj2[val]) return false;
  }

  return true;
};

validAnagram("abcde", "edcBa");

// 다른 풀이 방법.
function validAnagram2(first, second) {
  if (first.length !== second.length) return false;

  const lookup = {};

  for (let i = 0; i < first.length; i++) {
    let letter = first[i];

    // letter가 존재하면 +1 아니면 1로 초기화
    lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
  };

  for (let i = 0; i < second.length; i++) {
    let letter = second[i];

    if (!lookup[letter]) {
      return false;
    } else {
      // 있으면 -1을 해줘서
      lookup[letter] -= 1;
    }
  }
  // lookup 객체의 키값이 모두 0이면 true

  return true;
}

validAnagram2("anagram", "nagaram");