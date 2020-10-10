// null, undefined
let nothing = null;
console.log(`nothing : ${nothing}, type: ${typeof nothing}`); //nothing : null, type: object (EcmaScript의 설계상 오류로 원래는 null 이어야함.)
let x;
console.log(`x: ${x}, type ${typeof x}`); //x: undefined, type undefined

// null vs undefined
console.log('null vs undefined');
console.log('null === undefined: ', null === undefined); // false: ===은 타입까지 비교함
console.log('null == undefined: ', null == undefined); // true: == 은 타입은 비교하지 않음
