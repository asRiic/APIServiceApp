const { Router } = require('express');
const router = Router();

const { getNotes, postNotes, getNote, deleteNotes, putNotes } = require('../controllers/notes.controller');

//Ruta de envio y datos de Notas
router.route('/')

    .get(getNotes)
    .post(postNotes)


router.route('/:id')

    .get(getNote)
    .put(putNotes)
    .delete(deleteNotes)

module.exports = router;