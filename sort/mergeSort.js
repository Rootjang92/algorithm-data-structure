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

function mergeSort(arr) {
  return arr;
};

// console.log(mergeSort([]))