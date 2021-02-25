const notesCtrl = {};

const modelNotes = require('../models/Notes')

//Funcion que lista todas la notas guardadas 
notesCtrl.getNotes = async (req, res) => {
    const notes = await modelNotes.find();
    res.json(notes);
} 

//Funcion que crea una nueva nota
notesCtrl.postNotes = async (req, res) =>{
    const {tittle, content, date, author} = req.body;
    const newNote = new modelNotes({
        tittle: tittle,
        content: content,
        date: date,
        author: author
    })
    await newNote.save();
    res.json('Guardado');
}

//Funcion que actualiza las notas
notesCtrl.putNotes = async (req, res) => {
    const {tittle, content, date, author} = req.body;
    await modelNotes.findOneAndUpdate({_id: req.params.id}, {
        tittle: tittle,
        content: content,
        date: date,
        author: author
    });
    res.json('Se ha modificado correctamente');
}

//Funcion que elimina notas
notesCtrl.deleteNotes = async (req, res) => {
    await modelNotes.findByIdAndDelete({_id: req.params.id});
    res.json('Se ha eliminado correcamente');
}

//Funcion que busca una nota en especifico
notesCtrl.getNote = async(req, res) => {
    const note = await modelNotes.findById({_id : req.params.id});
    res.json(note);
}

module.exports = notesCtrl;

