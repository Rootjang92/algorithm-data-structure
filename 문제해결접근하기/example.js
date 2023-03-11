function charCount(str) {
  // 모든 문자열 추적, 대소문자 구분 x
  // 문자열 반복 for each character -> 
    // if the char is key in object, add one to count, 
    // if the char not is key in object, add it and set value to 1
    // 특수문자, 공백은 아무것도 하지 않는다. (숫자를 세지 않음)
  // return object at end
  const result = {};

  for (let char of str) {
    
    // charCodeAt을 활용한 문자 범위로 구분도 가능
    if (/[a-z0-9]/.test(char)) {
      char = char.toLowerCase();
      result[char] = ++result[char] || 1;
    }
  }

  console.log(result);
};

charCount("Hello hi");

