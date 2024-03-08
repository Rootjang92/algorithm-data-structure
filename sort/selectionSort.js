// 처음부터 끝까지 움직이지만 실제 정렬된 데이터는 처음부터 누적된다.

// 최솟값을 선택하고 맨 앞으로 배치.
// swap 사용.

// 최솟값을 저장할 변수
// 첫 번째 항목과 같게 설정
// 다음 항목과 비교하여 다음 항목이 더 작을 경우 다음 항목을 가장 작은 변수로 대체, 작지 않으면 계속 진행.
// 더 작은 값을 찾으면 변수값 변경

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let min = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }

    if (i !== min) {
      const temp = arr[i]
      arr[i] = arr[min]
      arr[min] = temp
    }
  }

  return arr;
}

console.log(selectionSort([0, 2, 34,22,10,19,17]));

// O(n^2)