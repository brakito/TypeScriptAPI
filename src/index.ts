import express from 'express';
import diaryRouter from './routes/diaries';

const app = express();
app.use(express.json()); //midleware que transforma la req.body a json

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running in port ${PORT}`)
});

app.use('/api/diaries', diaryRouter);