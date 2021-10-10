// Перепиши функцию toggleUserState() так, чтобы она не использовала callback-функцию callback, а принимала всего два параметра allUsers и userName и возвращала промис.

const users = [
  { name: 'Mango', active: true },
  { name: 'Poly', active: false },
  { name: 'Ajax', active: true },
  { name: 'Lux', active: false },
];

const toggleUserState = (allUsers, userName) => {

  let promises = allUsers.map(user => {
      
    return new Promise(resolve=>{

      if (user.name === userName) {
        resolve ({ ...user, active: !user.active })
      } else {
        resolve (user)
      }
    });
  }) 
  return Promise.all(promises)
  
};

const logger = updatedUsers => console.table(updatedUsers);


toggleUserState(users, 'Mango').then(logger);
toggleUserState(users, 'Lux').then(logger);

// Решил но нужно подумать над другим решением