const model = require('../models/postModel');

exports.getAll = async (req, res, next) => {
  try {
    const result = await model.getAllPosts();
    res.json(result.rows);
  } catch (err) {
    next(err);
  }
};

exports.getOne = async (req, res, next) => {
  try {
    const result = await model.getPostById(req.params.id);
    if (result.rows.length === 0) return res.status(404).json({ error: 'Post not found' });
    res.json(result.rows[0]);
  } catch (err) {
    next(err);
  }
};

exports.create = async (req, res, next) => {
  try {
    const { title, content } = req.body;
    const result = await model.createPost(title, content);
    res.status(201).json(result.rows[0]);
  } catch (err) {
    next(err);
  }
};

exports.update = async (req, res, next) => {
  try {
    const { title, content } = req.body;
    const result = await model.updatePost(req.params.id, title, content);
    if (result.rows.length === 0) return res.status(404).json({ error: 'Post not found' });
    res.json(result.rows[0]);
  } catch (err) {
    next(err);
  }
};

exports.remove = async (req, res, next) => {
  try {
    const result = await model.deletePost(req.params.id);
    if (result.rows.length === 0) return res.status(404).json({ error: 'Post not found' });
    res.json({ message: 'Post deleted' });
  } catch (err) {
    next(err);
  }
};
