const electionVotes = [
  "Ram",
  "shyam",
  "Hari",
  "Geta",
  "Sita",
  "Ram",
  "shyam",
  "Ram",
  "shyam",
  "Geta",
  "Sita",
  "Hari",
  "Geta",
  "Sita",
  "Ram",
  "shyam",
  "Hari",
  "shyam",
  "Hari",
  "kedar",
];

const tallyVotes = (votes) =>
  votes.reduce(
    (acc, name) => ({
      ...acc,
      [name]: acc[name] ? acc[name] + 1 : 1,
    }),
    {}
  );

console.log(tallyVotes(electionVotes));

// Challenge 2
