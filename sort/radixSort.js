// 기수 정렬
// 데이터의 특별한 속성을 이용 (정수 배열)
// radix sort (기수 정렬) - 숫자 배열
// 자릿 수가 많은 수가 자릿수가 적은 수보다 크다. (정수)

// 가장 오른쪽 자리 수를 비교하여 목록을 구성
// 각 자릿수가 없는 경우, 0으로 취급

// num의 절대값을 10 place 제곱으로 나눈 값을 내려 10으로 나눈 나머지
function getDigit(num, place) {
  return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
}

function digitCount(num) {
  if (num === 0) return 1; // Math.log10(1) -> -Infinity 방지
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(numArr) {
  let maxDigits = 0;
  for (let i = 0; i < numArr.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(numArr[i]));
  }
  return maxDigits;
} 

// console.log(getDigit(12345,2));
// console.log(digitCount(12345));
// console.log(mostDigits([1,2,355,652, 152352, 57]))


// 먼저 가장 큰 수가 몇 번째 자리인지 알아낸다.
// 각 자릿수에 버킷을 만든다. (하위 배열 0 to 9)
// 각각의 수를 올바른 버킷에 넣는다.
// 기존 배열을 버킷의 값으로 교체한다.

function radixSort(arr) {
  const maxDigit = mostDigits(arr);
  console.log(maxDigit);

  for (let k = 0; k < maxDigit; k++) {
    // make bucket
    let digitBuckets = Array.from({ length: 10 }, () => []);
    for (let i = 0; i < arr.length; i++) {
      let digits = getDigit(arr[i], k);
      digitBuckets[digits].push(arr[i]);
    }
    arr = [].concat(...digitBuckets);
  }

  return arr;
}

console.log(radixSort([522, 6758, 123, 1, 5, 234, 632, 7456, 2352]));

// best, average, worst : O(nk) -> n = 정렬할 항목 수 혹은 정수의 수, k = 수의 길이(word size - 자릿수)



