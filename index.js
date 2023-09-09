import express from "express";
import bodyParser from "body-parser";
import notesRouter from './routes/notes.js';

const app = express();
const PORT = 9000;

app.use(bodyParser.json());
app.use('/notes', notesRouter);

app.listen(PORT, () => {
    console.log(`Server running on PORT ${PORT}`)
})