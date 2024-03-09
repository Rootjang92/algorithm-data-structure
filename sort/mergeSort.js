// 이전에 배운 선택, 삽입, 버블 정렬은 큰 배열에는 맞지 않음 (너무 느림)
// 시간 복잡도를 O(nlogn)으로 향상 시킬 수 있다.


// 두 배열 합병을 담당할 함수 정렬된 두 배열이 주어진다.
// O(n + m)

// 빈 배열을 만든다.
// 각 입력 배열의 가장 작은 값부터 시작
// i, j
// while loop
// [1, 10, 50], [2,14,99,100] -> [1] -> [1,2] -> [1,2,10], [1,2,10,14], [1,2,10,14,55] -> [1,2,10,14,55,99] -> [1,2,10,14,55,99,100]
function merge(arr1, arr2) {
  let result = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      result.push(arr1[i]);
      i++;
    } else {
      result.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    result.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    result.push(arr2[j]);
    j++;
  }
  
  return result;
}

console.log(merge([1,10,50], [2,14,99,100]));

// 대부분 재귀함수를 사용하여 진행함.
// 배열을 계속 반으로 나누는 게 핵심.
// slice -> recursion
function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  let mid = Math.floor(arr.length / 2);
  let leftSide = mergeSort(arr.slice(0, mid));
  let rightSide = mergeSort(arr.slice(mid));
  
  return merge(leftSide, rightSide);
};

console.log(mergeSort([10,24,76,73,72,1,9]));

// O(nlogn) -> 8개의 배열이 1개로 return -> 1 - 2 - 4 - 8 (거꾸로 봤을 때)
// 8이여서 3번 분할. log 2^3
// 분할마다 합병할 때 O(n)번 비교한다. 합병의 마지막 단계를 보면 작은 값 선택 시 O(n) 비교 수행
// 따라서 O(nlogn)