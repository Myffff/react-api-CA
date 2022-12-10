import express from 'express';
import Genres from './genreModel';

const router = express.Router(); // eslint-disable-line

// Get all users
router.get('/', async (req, res) => {
    const genres = await Genres.find();
    res.status(200).json(genres);
});

// register(Create)/Authenticate User
router.post('/', async (req, res) => {
    await Genres(req.body).save();
    res.status(201).json({
        code: 201,
        msg: 'Successful created new user.',
    });
});
export default router;