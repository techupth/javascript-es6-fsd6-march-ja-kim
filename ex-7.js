const employee1 = {
  name: "John",
  age: 20,
};

employee1.scores = {};

const result1 = employee1.scores.english;

const employee2 = {
  name: "A",
  age: 50,
  scores: {
    math: 40,
  },
};

employee2.scores.english = null ?? "English score is not defined";

const result2 = employee2.scores.english;

console.log(result1);
console.log(result2);
