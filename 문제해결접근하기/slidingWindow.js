// 기준점 간 이동 배열 패턴

// maxSubarraySum
// 배열과 숫자 하나를 전달하고 서로 마주한 n개의 숫자의 합이 가장 큰 합계를 리턴

// window 만들어서 왼쪽에서 오른쪽으로 이동하기.

function maxSubarraySum(arr, num) {
  if (num > arr.length) return null;
  let max = -Infinity; // 배열이 음수일 경우 모두 음수일 것.
  
  // 합계를 구할 수 있는 마지막 위치에서 멈춰야 한다.
  // 마지막 위치 -> 5,6,3
  for (let i = 0; i < arr.length - num + 1; i++) {
    temp = 0;
    for (let j = 0; j < num; j++) {
      // i + j -> 0,1,2...
      temp += arr[i + j];
    }

    if (temp > max) {
      max = temp;
    }
  }

  console.log(max);
};

// maxSubarraySum([2,6,9,2,1,8,5,6,3], 3); // 19

// refactoring
// sliding window
function maxSubarraySum2(arr, num) {
  let maxSum = 0;
  let tempSum = 0;

  if (arr.length < num) return null;

  for (let i = 0; i < num; i++) { // 첫 시작의 합계 구하기
    maxSum += arr[i];
  };

  tempSum = maxSum;

  console.log(tempSum);

  for (let i = num; i < arr.length; i++) { // 그 다음 num부터 시작
    tempSum = tempSum - arr[i - num] + arr[i]; // ex-> (2+6+9) - (2) + 2;
    maxSum = Math.max(maxSum, tempSum); // 그 결과 둘 중에 큰 값 대입.
  }

  console.log(maxSum);
};

maxSubarraySum2([2,6,9,2,1,8,5,6,3], 3); // 19
