console.log("Hello World!\n==========\n");
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

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
function plus(number) {
  return function(plusNumber) {
    return number + plusNumber;
  }
}

let plus15 = plus(15);

console.log(plus15(10));

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
users.forEach(user => console.log(user.name));

// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");
let mapUsers = users.map((user) => {
  return {name: user.name, score: user.score};
});

console.log(mapUsers);

// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");
let activeUsers = users.filter(user => user.isActive);

console.log(activeUsers);

// Exercise 5 Section
console.log("EXERCISE 5:\n==========\n");
let sortScoreDesc = users.sort((a,b) => b.score - a.score);

console.log(sortScoreDesc);

// Exercise 6 Section
console.log("EXERCISE 6:\n==========\n");
let sumOfScores = users.reduce((sum,cur) => sum + cur.score, 0);
let avgScores = sumOfScores/users.length;

console.log("Sum of scores:",sumOfScores);
console.log("Avg scores:",avgScores);