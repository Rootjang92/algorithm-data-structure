// 선택 정렬과 비슷하지만

// 배열의 과반을 점차적으로 만들어 정렬을 구축한다.
// 한 번에 하나를 취해서 올바른 위치에 삽입한다.

// 2번째 값을 취해서 앞에 값과 비교한다.
// 정렬된 부분을 거치며 반복한다.

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    const currentVal = arr[i];
    
    let j;
    for (j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      arr[j+1] = arr[j]
      
    }

    arr[j+1] = currentVal
  }

  return arr;
}

console.log(insertionSort([2,1,9,76,4]));

// O(n^2) - worst / O(n)