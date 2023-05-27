//Exercise 1

// function plus(number) {
//     return function (plusNumber) {
//         return number + plusNumber
//     };
// };


// let plus15 = plus(15);

// console.log(plus15(10));



//Exercise 2

let users = [
    {
      name: "Frodo",
      age: 50,
      score: 85,
      isActive: false,
    },
    {
      name: "Sam",
      age: 38,
      score: 94,
      isActive: true,
    },
    {
      name: "Merry",
      age: 36,
      score: 82,
      isActive: true,
    },
    {
      name: "Pippin",
      age: 26,
      score: 77,
      isActive: false,
    },

  ];



//   users.forEach(user => {
//     console.log(user.name);
//   });

// //or

// users.forEach((user) => console.log(user.name));





//Exercise 3

// users.map(({name, score}) => {
//     console.log(name, score);
//   });



//Exercise 4

// let filteredUsers = users.filter((user) => {
//     return user.isActive === true;
// });

// console.log(filteredUsers);

//or

// let filteredUsers = users.filter(user => user.isActive === true);

// console.log(filteredUsers);

//Exercise 5

//   users.sort((a, b) => {
//     if (a.score < b.score) return 1;
//     else return -1;
//   });

//   console.log(users);

//   //or

//   users.sort((a, b) => b.score - a.score); // b.score > a.score => swap order

//positive number swaps the orders, 0 or -1 do not

//Exercise 6

// let avgScore = users.reduce((sum, user) => sum + user.score, 0) / users.length;

// console.log(avgScore);