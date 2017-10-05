console.log("+++++++++++++++++++++++++++++START HERE!!!+++++++++++++++++++++++++++++++++++++++++++++++\n");
var basic = require ("./BasicCard");
  // console.log (basic);
var cloze = require ("./ClozeCard");
  // console.log (cloze);

var type = process.argv[2];
  console.log (type);

if (type === "basic"){
  new basic();
}
else if (type === "cloze"){
  new cloze();
}
