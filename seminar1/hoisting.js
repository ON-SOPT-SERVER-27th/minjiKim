hoistFunction();

function hoistFunction() {
  console.log(x); //undefined -> 오류가 안남(변수를 밑에 선언했는데도, 끌어올려져서 변수는 선언한것과 같음)
  var x = 'var';
  console.log(x); //var
}
