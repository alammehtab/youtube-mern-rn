// CHAPTER-32: SPECIFYING A DATE AND TIME

// const now = new Date();
// console.log(now);

// const helloToTheFuture = new Date("June 30, 2035");
// console.log({ helloToTheFuture });

// INVALID DATE
// const helloToTheFuture = new Date("June 33, 2035");
// console.log(helloToTheFuture);

// DAYS TO ELECTION
// const now = new Date();
// const election = new Date("APRIL 8, 2024");
// const timeToElectionInMilliseconds = election - now;
// console.log({ timeToElectionInMilliseconds });
// const daysToElection = timeToElectionInMilliseconds / (1000 * 60 * 60 * 24);
// console.log(daysToElection);
// console.log(Math.floor(daysToElection));

// HOURS TO ELECTION
const now = new Date();
const election = new Date("APRIL 8, 2024");
const timeToElectionInMilliseconds = election - now;
const hoursToElection = timeToElectionInMilliseconds / (1000 * 60 * 60);
// console.log(hoursToElection);
console.log(Math.floor(hoursToElection));
