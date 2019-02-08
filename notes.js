console.log('Starting notes.js');

const fs = require('fs');

var fetchNotes = () => {
  try {
    var notesString = fs.readFileSync('notes-data.json'); //open file store in var
    return JSON.parse(notesString); // pare in value to notes array
  }
  catch (e){
    return [];
  }
};

var saveNotes = (notes) => {
  fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

var addNote = (title, body) => {
  var notes =fetchNotes();
  var note = {
    title,
    body
  };
// check if there is duplicate,
  var duplicateNotes = notes.filter((note) => note.title === title);// expression gets returned as the function results automatically
//if non - continue
  if(duplicateNotes.length === 0){
    notes.push(note);
    saveNotes(notes);
    return note;
  }
};

var getAll = () =>{
  return fetchNotes();
};

var getNote = (title) =>{
  var notes = fetchNotes();
  var foundNotes = notes.filter((note) => note.title === title);
  return foundNotes[0];
};

var removeNote = (title) =>{
  var notes = fetchNotes();
  var filteredNotes = notes.filter((note) => note.title !== title);
  saveNotes(filteredNotes);

  return notes.length !== filteredNotes.length;
};

var logNote =(note) =>{

  console.log('---');
  console.log(`Title: ${note.title}`);
  console.log(`Body: ${note.body}`);
}

// we export our function so it can be used outside of the file
module.exports = {
  addNote,        //u can do this way
  getAll: getAll,  //or u can do this, to add in the exports section
  getNote,
  removeNote,
  logNote
};
