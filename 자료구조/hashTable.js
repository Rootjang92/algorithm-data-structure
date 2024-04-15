// hashing algorithm
// 키-값 쌍 저장
// 키는 순서를 가지지 않는다.
// 값을 찾거나 추가하거나 제거하는데 아주 빠르다.
// JS -> objects, Maps(only string key)

// hash function
// string key -> index

// 해시 함수 -> 소수 사용

// separate chaining -> 공동 저장 (중첩 데이터)
// linear probing -> 위치에는 하나의 데이터만 저장하는데 충돌이 발생하면 다음 빈 칸을 확인하여 저장.

// function simpleHash(key, arrayLength) {
//   let total = 0;
//   let WEIRD_PRIME = 31;

//   for (let i = 0; i < Math.min(key.length, 100); i++) {
//     let char = key[i];
//     let value = char.charCodeAt(0) - 96
//     total = (total * WEIRD_PRIME + value) % arrayLength
//   }

//   console.log(total);
//   return total;
// };

class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }

  _hash(key) {
    let total = 0;
    let WEIRD_PRIME = 31;

    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96
      total = (total * WEIRD_PRIME + value) % this.keyMap.length
    }

    return total;
  }

  // hashed the key -> separate chaining
  set(key ,value) {
    let index = this._hash(key);
    if (!this.keyMap[index]) {
      this.keyMap[index] = [];
    }
    this.keyMap[index].push([key, value]);
  }

  // accepts key -> hashes the key -> 값 확인
  get(key) {
    let index = this._hash(key);
    if (this.keyMap[index]) {
      for (let i = 0; i < this.keyMap[index].length; i++) {
        if (this.keyMap[index][i][0] === key) {
          console.log(this.keyMap[index][i][1]);
          return this.keyMap[index][i][1]
        } 
      }
    }

    console.log("no")
    return undefined;
  }

  keys() {
    let keys = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          if (!keys.includes(this.keyMap[i][j][1]))  {
            // console.log(this.keyMap[i][j][1]);
            keys.push(this.KeyMap[i][j][1]);
          }
        }
      }
    }
    console.log(keys);
  }

  values() {
    let data = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          if (!data.includes(this.keyMap[i][j][1]))  {
            data.push(this.KeyMap[i][j][1]);
          }
        }
      }
    }
    console.log(data);
  }
}

let ht = new HashTable(17);
ht.set("hello world", "good bye");
ht.set("dog", "cat");
ht.set("cats", "are fine");
ht.set("i love", "pizza");
ht.set("test1", "test112");
ht.set("test2", "test119");

ht.keys();

// 기본적인 복잡도는 O(1)


// 해시 테이블은 키-값 쌍의 모음 like Map
// key를 사용하여 값을 아주 빠르게 찾을 수 있다.