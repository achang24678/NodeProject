// var obj = {
//   name: 'Allen'
// };
// var stringObj = JSON.stringify(obj);
// console.log(typeof stringObj);
// console.log(stringObj);


// var personString = '{"name": "Allen","age": 25}';
// var person = JSON.parse(personString);
// console.log(typeof person);
// console.log(person);

const fs = require('fs');

var originalNote = {
  title: 'Some title',
  body: 'Some body'
};

//json.stringify takes regular object and converts into string
var originalNoteString = JSON.stringify(originalNote);
fs.writeFileSync('notes.json', originalNoteString); // write to file notes.json

var noteString = fs.readFileSync('notes.json'); //read that value out
var note = JSON.parse(noteString); //convert back to object type

console.log(typeof note);
console.log(note.title);
