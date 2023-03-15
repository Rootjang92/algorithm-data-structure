// 분할과 정복 패턴

// 분할정복
// 배열을 작은 조각으로 세분하여 조각들을 어디로 이동시킬 지 정한다.

function search(array, val) {
  let min = 0;
  let max = array.length;

  while (min <= max) {
    let middle = Math.floor((min + max) / 2);
    let currentElement = array[middle];

    if (array[middle] < val) {
      min = middle + 1;
    } else if (array[middle] > val) {
      max = middle - 1;
    } else {
      return middle;
    }
  }

  return -1;
};

search([1,2,5,6,7,8,9,15], 6);