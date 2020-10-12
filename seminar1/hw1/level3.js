/* 
가짜 서버파트 members.js 데이터를 이용해서 랜덤으로 조를 짜는 알고리즘 만들어보기.
 */
const members = require('./member');
const OB = members.filter((mem) => mem.status === 'OB');
const YB = members.filter((mem) => mem.status === 'YB');

const suffle = (memberArr) => {
  for (let i = memberArr.length - 1; i > 0; i--) {
    // 정수 랜덤 값을 생성
    const j = Math.floor(Math.random() * (i + 1));
    // i요소, j요소를 서로 뒤바꾸는 작업
    [memberArr[i], memberArr[j]] = [memberArr[j], memberArr[i]];
  }
  return memberArr;
};

const makeTeam = (teamNum) => {
  const suffledOB = suffle(OB);
  const suffledYB = suffle(YB);

  const result = {};

  for (let i = 0; i < teamNum; i++) {
    result[`${i + 1}조`] = [];
  }

  suffledOB.map((member) => {
    let num = suffledOB.indexOf(member) % teamNum;
    result[`${num + 1}조`].push(member);
  });

  suffledYB.map((member) => {
    let num = suffledYB.indexOf(member) % teamNum;
    result[`${num + 1}조`].push(member);
  });

  return result;
};

console.log(makeTeam(7));
