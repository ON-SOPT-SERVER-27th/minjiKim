// 중학교 -> 고등학교 -> 대학교
const 자퇴 = true;

const middleSchool = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('중학교');
    }, 1000);
  });

const highSchool = (school) =>
  new Promise((resolve, reject) => {
    if (자퇴) {
      setTimeout(() => {
        reject(new Error('자퇴해서 에러!'));
      });
    } else {
      setTimeout(() => {
        resolve(`${school} => 고등학교`);
      });
    }
  });

const university = (school) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`${school} => 대학교`);
    }, 1000);
  });

middleSchool() //
  .then((school) => highSchool(school))
  //부분적으로 체이닝 해서 에러핸들링 하기
  .catch((err) => {
    return `검정고시`;
  })
  .then((school) => university(school))
  .then((result) => console.log(result))
  .catch((error) => console.error(error));
