// 선형 검색보다 크게 개선 되었으며 훨씬 빠르다.
// 확인할 때마다 남은 항목에 절반을 없앤다.
// 단 데이터가 분류되어 있어야 한다. (배열에서만 가능) -> 알파벳 순, 숫자 크기 순 등

// 배열의 중간점을 선택하고(첫 번째), 입력값이 중간점보다 큰지 작은지를 판단해야 한다.
// 비교 군위에 해당하는 부분의 배열을 잘라서 검색
// 반복


// 1. 정렬된 숫자 배열
// 2. 좌측 포인터 0, 우측 포인터는 arr.length - 1
// 3. 좌측 포인터가 우측 포인터보다 앞에 있으면 종료.
// 4. 중간값이 입력값이면 입력값 return
// 5. 


function binarySearch(arr, val) {
  let start = 0;
  let end = arr.length - 1;
  let mid;

  while (start <= end) {
    mid = Math.floor((start + end) / 2);

    if (arr[mid] === val) {
      return mid;
    }

    if (arr[mid] > val) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }

  return -1;
}

console.log(binarySearch([1,2,3,4,5,6,7,8,9], 5));


// solution

function binarySearch2(arr, val) {
  let start = 0;
  let end = arr.length - 1;
  let mid = Math.floor((start + end) / 2); // 중간 평균값

  

  while (arr[mid] !== val && start <= end) {
    if (arr[mid] > val) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }

    mid = Math.floor((start + end) / 2);
  }
  
  if (arr[mid] === val) return mid;

  return -1;
}

// O(logN) / best: O(1)

console.log(binarySearch2([2,5,6,9,13,15,28,30], 5));
console.log(binarySearch2([2,5,6,9,13,15,28,30], 50));