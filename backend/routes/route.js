import express from 'express';
import { addPost, getPost, like, deletePost } from '../models/queries.js';

const router = express.Router();
router.get('/', (req, res) => {
    res.send(`Hello from Vite and Express!`);
  });
  
router.get('/posts', async(req, res) => {
    const posts = await getPost();
    res.json(posts);
  });


router.post('/posts', async(req, res) => {
    const { titulo, url: img, descripcion, likes } = req.body;
    await addPost(titulo, img, descripcion, likes)
    res.send('Post added successfully')
});

router.put('/posts/like/:id', async(req, res) => {
  const { id } = req.params;
  await like(id);
  res.send('Like added successfully');
});

router.delete('/posts/:id', async(req, res) => {
  const { id } = req.params;
  await deletePost(id);
  res.send('Post deleted successfully');
});

export default router;