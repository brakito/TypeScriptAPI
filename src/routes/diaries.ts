import express from 'express';
import * as diaryServices from '../services/diaryServices';
import toNewDiaryEntry from '../utils';

const router = express.Router();

router.get('/', (_req, res) => {
    res.send(diaryServices.getSafeEntriesInfo());
});

router.get('/:id', (req, res) => {
    const diary = diaryServices.findById(+req.params.id); //el '+' convierte un texto a numero
    return (diary != null)
    ? res.send(diary)
    : res.send('404 | No encontramos el archivo');
});

router.post('/', (req, res) => {
    try {
        const newDiaryEntry = toNewDiaryEntry(req.body);
        const newDiary = diaryServices.addDiary(newDiaryEntry);
        res.json(newDiary);
    } catch (error: any) {
        res.status(400);
        res.send(error.message);
    }
});

router.get('/comment/:id', (req, res) => {
    const diary = diaryServices.findByIdComment(+req.params.id);
    return (diary != null)
    ? res.send(diary)
    : res.send('404 | No encontramos el comentario')
})

export default router;