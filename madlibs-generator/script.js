let place = prompt("Place: ");
let bird = prompt("Bird: ");
let food = prompt("Food: ");
let verb = prompt("Action: ");

place = place.trim().toUpperCase();
bird = bird.trim().toUpperCase();
food = food.trim().toUpperCase();
verb = verb.trim().toUpperCase();


const story1 = "Today I went to the " + place + " with my friend.";
const story2 = `We saw a ${bird} eating ${food}, and it started to ${verb}!`;

const shortStory = `Today I went to the ${place} with my friend. We saw a ${bird} eating ${food}, and it started to ${verb}!`;

const stories = [
  `Today I went to the ${place} with my friend. We saw a ${bird} eating ${food}, and it started to ${verb}!`,
  `Once upon a time, a ${bird} lived near a ${place}. It loved eating ${food} more than anything.`,
  `Breaking news: a ${bird} was seen trying to ${verb} at the local ${place} today, holding a slice of ${food}.`
];

let randomIndex = Math.floor(Math.random() * stories.length);
let chosenStory = stories[randomIndex];


console.log("Length of food: " + food.length);
console.log(story1 + " " + story2);
console.log(shortStory);
console.log(chosenStory);
