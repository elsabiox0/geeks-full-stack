const gameInfo = [
 {
   username: "john",
   team: "red",
   score: 5,
   items: ["ball", "book", "pen"]
 },
 {
   username: "becky",
   team: "blue",
   score: 10,
   items: ["tape", "backpack", "pen"]
 },
 {
   username: "susy",
   team: "red",
   score: 55,
   items: ["ball", "eraser", "pen"]
 },
 {
   username: "tyson",
   team: "green",
   score: 1,
   items: ["book", "pen"]
 },
];

// 1. Create an array using forEach that contains all the usernames with an exclamation point.
const usernames = [];
gameInfo.forEach(player => {
  usernames.push(player.username + "!");
});

console.log(usernames); 

// 2. Create an array using forEach that contains the usernames of all players with a score bigger than 5.
const winners = [];
gameInfo.forEach(player => {
  if (player.score > 5) {
    winners.push(player.username);
  }
});

console.log(winners); 

// 3. Find and display the total score of the users.
let totalScore = 0;
gameInfo.forEach(player => {
  totalScore += player.score;
});

console.log(totalScore); 