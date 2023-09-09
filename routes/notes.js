import express from 'express';
import { v4 as uuidv4 } from 'uuid';

const router = express.Router();

let notes = [];

router.get('/', (req, res) => {
    res.send(notes);
})

router.post('/', (req, res) => {
    const note = req.body;
    notes.push({ ...note, id: uuidv4() })

    res.send('New note is added')
})

router.get('/:id', (req, res) => {

    const { id } = req.params;
    const foundNote = notes.find((note) => note.id === id);
    res.send(foundNote)
})

router.patch('/:id', (req, res) => {
    const { id } = req.params;
    const { note, author, place } = req.body;

    const noteToUpdate = notes.find((note) => note.id === id);

    if (note) noteToUpdate.note = note;
    if (author) noteToUpdate.author = author;
    if (place) noteToUpdate.place = place;

    res.send("Note updated");
})

router.delete('/:id', (req, res) => {
    const { id } = req.params;
    notes = notes.filter(note => note.id !== id)
    res.send("Note removed")
})

export default router;