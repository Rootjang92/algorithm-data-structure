/**
 * 인덱스나 위치에 해당하는 포인터나 값을 만들고 특정 조건에 따라 중간 지점에서부터 시작 지점 혹은 끝 지점까지 양쪽 지점으로 이동시킨다.
 */

// example
// 정렬된 배열을 취하는 sumZero 함수
// 1. 오름차순 정렬
// 2. 요소 중 더하기 해서 0이 나오는 값의 배열 추출 없으면 undefined 추출
// 3. 두 개의 포인터를 사용해서 추출하는 방법 있음.

// 조금 간단한 연산임.
function sumZero(sortedArr) {
  for (let i = 0; i < sortedArr.length; i++) {
    for (let j = i + 1; j < sortedArr.length; j++) {
      if (sortedArr[i] + sortedArr[j] === 0) {
        console.log([sortedArr[i], sortedArr[j]]);
        return [sortedArr[i], sortedArr[j]]
      }
    }
  }
}

sumZero([-4,-3,-2,-1,0,1,2,5]);

// 두 개의 포인터를 사용한 연산
function sumZero2(sortedArr) {
  let left = 0; // left index
  let right = sortedArr.length - 1; // right index

  while (left < right) {
    let sum = sortedArr[left] + sortedArr[right];

    if (sum === 0) {
      console.log([sortedArr[left], sortedArr[right]]);
      return [sortedArr[left], sortedArr[right]];
    } else if (sum > 0) {
      right--; // 오름차순이므로 right값이 더 크니 줄이고
    } else {
      left++; // 아니면 left 값
    }
  }
};

sumZero2([-4,-3,-2,-1,0,5,10]);


// 고유값을 세기.
// 정렬된 배열을 전달하면 고유한 값의 수를 세서 반환

function countUniqueValues(sortedArr) {
  let left = 0;

  for (let i = 1; i < sortedArr.length; i++) {
    // left 인덱스 값과 i 인덱스 값이 다르면 left를 증가시키고 값 교체.
    if (sortedArr[left] !== sortedArr[i]) {
      left++;
      sortedArr[left] = sortedArr[i]
    }
    console.log(left, i);
  };

  return sortedArr.length > 0 ? left + 1 : left;
};

countUniqueValues([1,2,3,4,4,4,5,5]);
countUniqueValues([]);
