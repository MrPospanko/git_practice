const jokeArray = ["I went to buy some camo pants but couldn’t find any.", "I used to have a handle on life, but then it broke.", "I failed math so many times at school, I can’t even count.",
"I want to die peacefully in my sleep, like my grandfather… Not screaming and yelling like the passengers in his car."];
const lenArray = jokeArray.length

var randomIndex = Math.floor(Math.random()* lenArray)

console.log(jokeArray[randomIndex])