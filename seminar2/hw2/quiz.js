const members = require('./member');

function getFemale(members) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      const Female = members.filter((mem) => mem.gender === '여');

      resolve(Female);
    }, 500);
  });
}

function getYB(members) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      const YB = members.filter((mem) => mem.status === 'YB');

      resolve(YB);
    }, 500);
  });
}

function getiOS(members) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      const ios = members.filter((mem) => mem.part === 'iOS');

      resolve(ios);
    }, 500);
  });
}

getFemale(members)
  .then((members) => {
    console.log(members);
    return members;
  })
  .then((members) => getYB(members))
  .then((members) => {
    console.log(members);
    return members;
  })
  .then((members) => getiOS(members))
  .then((members) => console.log(members));
