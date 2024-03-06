// 모든 개별 항목을 하나씩 확인하는 방법
// indexOf, includes, find, findIndex..

// 1. 배열 숫자 인수
// 2. loop
// 3. 입력값과 동일하면 index, 아니면 -1 반환

function linearSearch(numArr, value) {
  if (!numArr.length) return;

  for (let i = 0; i < numArr.length; i++) {
    if (numArr[i] === value) return i;
  }

  return -1;
};

console.log(linearSearch([10,15,20,25,30], 15));
console.log(linearSearch([9,8,7,6,5,4,3,2,1,0], 10));


// solution

function linearSearch2(arr, val) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) return i;
  }

  return -1;
}

console.log(linearSearch2([10,15,20,25,30], 15));
console.log(linearSearch2([9,8,7,6,5,4,3,2,1,0], 10));