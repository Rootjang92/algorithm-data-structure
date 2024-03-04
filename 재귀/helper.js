// 기존 팩토리얼 재귀는 자기 자신을 호출하는 함수였다.
// 헬퍼 메소드 재귀는 2개의 함수가 있어서 외부 함수와 재귀 함수를 만든다.
// 재귀 함수는 자기 자신을 호출한다. / 외부 함수는 외부에서 호출한다.

function collectodds(nums) {
  let result = [];

  function helper(input) {
    if (input.length === 0) return; // 종료 조건

    if (input[0] % 2 !== 0) {
      result.push(input[0])
    } // result에 push할 조건

    helper(input.slice(1)) // 첫 번째 항목 제외.
  }

  helper(nums);

  return result;
}

console.log(collectodds([1,2,3,4,5,6,7,8,9]));