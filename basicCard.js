var fs = require('fs');

//CONSTRUCTOR FUNCTION for creating a basic flashcard objects where the "front" is a question and the "back" is the answer.
var BasicCard = function(front, back) {
  // this.card =[]; see classroom.js to create an array
  this.front = front;
  this.back = back;
  // this.date = Date.now();
} //<--BasicCard

//create the printInfo method and applies it to all basicCard objects.
// BasicCard.prototype.printInfo = function(){
//   console.log("This is the BACK of the basic flashcard-->  " + this.front);
//   console.log("This is the FRONT of the basic flashcard-->  " +  "______" + this.back  + "?" + ("\n________________________________________________\n"));
// };

// //enter command line arguments to create flash cards instead of hard coding them
// var basicInput = new BasicCard (process.argv[3], process.argv[4]);
// //create a log of all of the flashcards entered by the user
// var logTxt = "\n Answer: " + basicInput.front + "\n Question: " + basicInput.back + "?" + "\n";
// fs.appendFile("basicLog.txt", logTxt);
// //prints on our shell
// basicInput.printInfo();
//export the function:
module.exports = BasicCard;
// module.exports = basicInput;


//////////////////////////////////////////////////////////
//hard code an example:
        // var firstPresident = new BasicCard(" George Washington","is who was the first president of the U.S.?");
        // //let's see if it prints
        // firstPresident.printInfo();

//hard code another example to see how the prototype works:
        // var negroni = new BasicCard(" Equal parts gin, Campari and sweet vermouth.","is how do you make a negroni? ");
        // //let's see what prints
        // negroni.printInfo();
// /////////////////////////////////////////////////////
