const mongoose = require('mongoose')

if (process.argv.lengrh < 3) {
  console.log('Please provide the password as an argument: node mongo.js <password>')
  process.exit(1)
}

const password = process.argv[2]

const url = `mongodb+srv://fullstack:${password}@cluster0.2mbjx.mongodb.net/note-app?retryWrites=true&w=majority`

mongoose.connect(url)
//Code for generating new notes
//define schema
//tells Mongoose how the note objects are to be stored in the database
const noteSchema = new mongoose.Schema({
  content: String,
  date: Date,
  important: Boolean
})

//model for the schema
//Model => constructors compiled from Schema definitions
//first parameter: singular name of the model
//Mongoose creará la colección como el plural en minúsculas del modelo
const Note = mongoose.model('Note', noteSchema)

// //Creamos un objeto note con la ayuda del modelo Note
// //Since the objects are created with the model's constructor function, they have all the properties of the model, which include methods for saving the object to the database.
// const note = new Note({
//   content: 'Models are fancy constructors compiled from Schema definitions',
//   date: new Date(),
//   important: true
// })

// //Salvamos el objeto en la DB
// //le damos un event handler con .then
// note.save().then(result => {
//   console.log('note saved!')
//   mongoose.connection.close()
// })

Note.find({}).then(result => {
  result.forEach(note => {
    console.log(note)
  })
  mongoose.connection.close()
})