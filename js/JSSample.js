console.log('Hello Javascript!');
//한줄 주석
/*
여러줄 주석
여러줄 주석
*/
console.log("큰 따옴표");

let num = 10;
let strNum = "10";

// 숫자인 num을 문자열로 형변환 후 비교
if (String(num) === strNum) {
  console.log('equals');
}

let arrScore = [10, 20, 30, 40, 50];

function ternaryOperation()
{
  let result = ( 2 > 1 ) ? "참입니다." : "거짓입니다.";
  console.log(result);
}

function ternaryOperationTest()
{
  let num = 9;
  let result = ( num % 2 >= 1 ) ? "홀수" : "짝수";
  console.log(result);
}

const addNum = function() {
  let num = 9;
  let result = ( num % 2 >= 1 ) ? "홀수" : "짝수";
  console.log(result);
}

const getResult1 = () => {
  for(let i = 1; i <= 9; i++)
  {
    console.log('3 * ' + i + ' = ' + ( 3 * i ) );
  }
}

const getResult2 = (dan) => {
  for (let i = 1; i <= 9; i++) {
    console.log(dan + ' * ' + i + ' = ' + (dan * i));
  }
}

const getResult3 = (dan) => {
  for (let i = 1; i <= 9; i++) {
    console.log(dan + ' * ' + i + ' = ' + (dan * i));
  }

  return dan + 1;
}

function displayMathScore()
{
  document.getElementById("math").innerText
    = "수학 점수 " + score.math + " " + (score.math + 10);
}

