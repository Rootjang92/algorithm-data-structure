function sumRange(num) {
  if (num === 1) return 1;
  return num + sumRange(num - 1);
}

// return 3 + sumRange(2)
// + return 2 + sumRange(1)
// + return 1
// 6


// 반복문으로 팩토리얼 구현하기

function loopFactorial(num) {
  let total = 1;

  for (let i = num; i > 0; i--) {
    total *= i
  }

  return total;
}