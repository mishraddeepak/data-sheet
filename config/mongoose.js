const mongoose=require('mongoose')
mongoose.connect('mongodb+srv://ddeepakmishra5:EP23S8pzlQdVgHbP@cluster0.orsaeev.mongodb.net/contacts?retryWrites=true&w=majority&appName=Cluster0')
const db = mongoose.connection
db.on('error',console.error.bind(console,"error in connectiong"))
db.once('open',()=>{
  console.log("Connected to the Database")
})

module.exports = db
