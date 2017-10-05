///INSTRUCTIONS FOR CLI:
// sample CLI display:       [0]   [1]     [2]      [3]                    [4]
  //Macbook:FlashCard user$ node main.js [type] "George Washington" "was the first president of the U.S."
    //[0] uses node.js
    //[1] name of the file
    //[2] [type] choose a basic, cloze or other
    //[3] will be the cloze deletion for a clozeCard or the back/answer for a basic flash card.  Use "" if more than one word, a.k.a. strings.
    //[4] will be the text for a clozeCard or the front/question for a basic flash card.  Use "" if more than one word, a.k.a. strings.

console.log("+++++++++++++++++++++++++++++START HERE++++++++++++++++++++++++++++++++++++++++++++\n");

var basic = require ("./BasicCard");
  
var cloze = require ("./ClozeCard");

var type = process.argv[2];

var clozeInput = new cloze (process.argv[3], process.argv[4]);

var brokenCloze = new cloze ("This will not create a cloze card, ", "oops! check your spelling!");

var basicInput = new basic (process.argv[3], process.argv[4]);


if (type === "basic"){
   console.log ("This is the front of the flashcard--> " + basicInput.front);
   console.log ("This is the back of the flashcard --> " + basicInput.back);
   console.log (basicInput);
} else if (type !=="cloze" ){
  console.log(brokenCloze);
} else if (type === "cloze"){
  console.log ("This is the cloze deletion portion --> " + clozeInput.cloze);
  console.log ("This is the text portion of the card-> " + clozeInput.text);
  console.log (clozeInput);
}
