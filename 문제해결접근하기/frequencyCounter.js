// 2가지 배열을 받아 2번째 배열이 1번째 배열에 제곱값을 가지고 있으면 true, 그렇지 않으면 false를 리턴하시오.
// 단, 빈도수가 맞아야 한다. [1,2,3] -> [1,4,9] or [4,9,1] = true

function same(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  let frequencyCounter1 = {};
  let frequencyCounter2 = {};

  // frequencyCounter1, frequencyCounter2에 각 배열에 빈도수 저장.
  for (let val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
  };

  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
  };

  console.log(frequencyCounter1);
  console.log(frequencyCounter2);

  // frequencyCouner1을 순회하여서 그 제곱값이 frequencyCounter2에 없으면 false
  // frequestCoutner2의 키값의 제곱과 frequencyCounter1의 key값이 같지 않으면 false
  for (let key in frequencyCounter1) {
    if (!(key ** 2 in frequencyCounter2)) return false;
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) return false;
  }

  return true;
}

same([1,2,3], [2,4,4]);

