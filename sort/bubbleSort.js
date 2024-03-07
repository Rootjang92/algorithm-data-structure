// 숫자를 오름차순으로 정렬한다고 가정하면 더 큰 숫자가 한 번에 하나씩 뒤로 이동하는 정렬.

// swap

const swap = (arr, idx1, idx2) => {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]] // or

  // var temp = arr[idx1];
  // arr[idx1] = arr[idx2];
  // add[idx2] = temp;
};

// or


// 숫자 배열을 전달ㄷ 받음.
// i 라는 변수를 가지고 배열의 맨 끝에서 루프를 시작해서 맨 앞에서 끝난다.
// 내부 루프는 처음(j)부터 i - 1까지 실행된다.
// arr[j]가 arr[j+1] 보다 크면 교환

function bubbleSort(arr) {
  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j+1]) {
        let etc = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = etc;
      }
    }
  }

  return arr;
}

console.log(bubbleSort([25,45,1,6,4]));

// solution

// 외부 반복을 끝에서부터 가 비교 횟수를 줄여 최적화 가능.

function bubbleSort2(arr) {
  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j+1]) {
        let etc = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = etc;
      }
    }
  }

  return arr;
};

console.log(bubbleSort2([25,45,1,6,4]));


// 최적화
// 데이터가 거의 정렬된 상태라면 버블 정렬을 할 필요가 없음.

function bubbleSort3(arr) {
  let noSwap;

  for (let i = arr.length; i > 0; i--) {
    noSwap = true;
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j+1]) {
        let etc = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = etc;
        noSwap = false;
      }
    }

    if (noSwap) break;
  }

  return arr;
};

console.log(bubbleSort3([8,1,2,3,4,5,6,7]));

// best: O(n), worst, average O(n^2)