var fs = require ('fs');
//CONSTRUCTOR for cloze deletion type flashcards
var ClozeCard = function (cloze,text){
this.cloze = cloze;
this.text = text;
}  //<--ClozeCard

//method
ClozeCard.prototype.printInfo = function (){
  console.log("This is the CLOZE-DELETION: " + this.cloze);
  console.log("This is the PARTIAL TEXT: " + this.text);
  console.log("This is the FULL TEXT: " + this.cloze + " " + this.text);
  console.log("\n________________________________________________\n");
};

//hard code an example:
      // var firstPresident = new ClozeCard (" George Washington", " was the fist president of the U.S.");
      // firstPresident.printInfo();

//method for using command line arguments to build clozeCards and store to a log
var clozeInput = new ClozeCard ( process.argv[3], process.argv[4]);
clozeInput.printInfo();
var logTxt = "\n" + clozeInput.cloze + " " + clozeInput.text + "\n";
fs.appendFile("clozeLog.txt", logTxt);

//export file
module.exports = ClozeCard;
// module.exports = clozeInput;
