
let users = {
    Alan: {
      age: 27,
      online: true
    },
    Jeff: {
      age: 32,
      online: true
    },
    Sarah: {
      age: 48,
      online: true
    },
    Ryan: {
      age: 19,
      online: true
    }
  };
  
  function isEveryoneHere(userObj) {
    return [
      'Alan',
      'Jeff',
      'Sarah',
      'Ryan'
    ].every(user => userObj.hasOwnProperty(user));
  }
  
  console.log(isEveryoneHere(users));
 