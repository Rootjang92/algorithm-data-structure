// 핵심은 pivot

// pivot helper
// 배열이 주어지면 요소를 포인트로 지정하여 배열 속 요소를 재배치하는 함수
// 피벗보다 작은 값은 모두 왼쪽으로 이동하며 큰 값은 모두 오른쪽으로 이동한다. (순서 중요 x)
// 헬퍼는 제자리에서 수행되어야 하고 새 배열을 만들면 안된다. 또 피벗 인덱스만 변해야 한다.
// pivot 선택 위치에 따라 시간 복잡도가 바뀐다. 
// 항상 첫 번째 요소를 피벗으로 선택한다.

function pivotHelper(arr, start = 0, end = arr.length - 1) {
  const swap = (array, i , j) => {
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  };

  let pivot = arr[start];
  let swapIndex = start;

  for (let i = start + 1; i <= end; i++) {
    if(pivot > arr[i]) {
      swapIndex++;
      swap(arr, swapIndex, i);
    }
  }

  swap(arr, start, swapIndex);
  return swapIndex;
}

console.log(pivotHelper([4,8,2,1,5,7,6,3]));


// quicksort
// pivotHelper 재귀 호출
// 업데이트된 피벗 인덱스를 헬퍼가 반환하면 피벗 헬퍼를 재귀적으로 왼쪽과 오른쪽에 호출한다.
// 
function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotIndex = pivotHelper(arr, left, right);
  
    // left
    quickSort(arr, left, pivotIndex - 1);
  
    // right
    quickSort(arr, pivotIndex + 1, right);
  }
  
  return arr;
};

console.log(quickSort([4,6,9,1,2,5,3]));

// best, average - O(nlogn)
// worst - O(n^2) - 완전 정렬된 경우 -> 이럴 경우 무작위 혹은 중간의 있는 값을 pivot으로 선택한다.