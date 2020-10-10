// 변수 테스트

/*
var는 재선언 가능 
*/
var variable_var = '123';
var variable_var = '321';
console.log('var: ', variable_var);

/*
let, const는 재선언 불가능
-> error: SyntaxError: Identifier 'variable_let' has already been declared
*/
let variable_let = '123';
let variable_let = '321';
console.log('let: ', variable_let);

const variable_const = '123';
const variable_const = '321';
console.log('const: ', variable_const);

const objectConst = { name: '최영훈' };
objectConst.name = '김정재'; //이거는 됨
console.log(objectConst); // 김정재

/*
var, let은 재할당 가능
const는 재할당 불가능
-> error: Assignment to constant variable.
*/
let variable_let = '123';
variable_let = '321';
console.log('let: ', variable_let);

const variable_const = '123';
variable_const = '321';
console.log('const: ', variable_const);
