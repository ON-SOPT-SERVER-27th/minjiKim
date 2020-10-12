/* 
자신의 팀원들을 소개할 수 있는 json Array 만들기
(팀원들의 이름, 사는 곳, 나이, 취미, 정보를 출력하는 함수 포함)
 */

const teamArr = [
  {
    name: '김지현',
    live: '서초구 잠원동',
    age: '22',
    hobby: '운동',
  },
  {
    name: '박상수',
    live: '인천광역시 연수구',
    age: '27',
    hobby: '사진찍기',
  },
  {
    name: '한수아',
    live: '서울시 강서구',
    age: '22',
    hobby: '영상편집',
  },
  {
    name: '신연상',
    live: '서울시 강남구',
    age: '21',
    hobby: '유튜브&방탈출',
  },
  {
    name: '강준우',
    live: '경기도 성남시 분당구',
    age: '24',
    hobby: '음악듣기, 운동하기',
  },
];

var introduce = teamArr.map((member) =>
  console.log(`내 팀원의 이름은 ${member.name}, 사는 곳은 ${member.live}, 나이는 ${member.age}, 취미는 ${member.hobby}입니다.`)
);
