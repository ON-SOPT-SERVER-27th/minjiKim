/**
 *  1. 함수 선언식 -> hoisting 가능
 */
console.log(add(2, 3)); // 5

function add(x, y) {
  return x + y;
}
console.log(addStr(2, 3)); //Error: addStr is not a function

/**
 *  2. 함수 표현식 -> hoisting X
 */

var addStr = function (x, y) {
  return x + y;
};
console.log(addStr('안녕', '하세요'));

/**
 *  2 - 1. 화살표 함수 표현식(hoisting X)
 */

var add = (x, y) => {
  return x + y;
};
console.log(add(2, 3));

/**
 *  3. 화살표 함수
 */

// 로직이 한줄일때 return 문 생략 가능
var add = function (x, y) {
  return x + y;
};

var add = (x, y) => x + y;

var add = (x, y) => x + y;
console.log(add(2, 4));

// 매개변수가 하나일때 매개변수 소괄호 생략 가능
var square = function (x) {
  return x * x;
};

var square = (x) => x * x;
console.log(square(4));

// 객체를 리턴하고 로직이 한줄일때는 소괄호 ( ) 로 감싸줘야함
var person = function (name, age) {
  return {
    name: name,
    age: age,
  };
};

// 소괄호로 감싸주는게 중요! 중괄호로 하면 헷갈려서 오류남!
var person = (name, age) => ({ name: name, age: age });
console.log(person('minji', 24));
