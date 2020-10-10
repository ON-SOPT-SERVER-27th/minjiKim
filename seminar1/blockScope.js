if (true) {
  var x = 'var';
}
console.log(`var: ${x}`); // var: var

if (true) {
  let y = 'let'; // 함수 스코프라서 전역변수가 아님
}
console.log(`let: ${y}`); // ReferenceError: y is not defined
