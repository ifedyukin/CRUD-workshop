import jwt from 'jsonwebtoken';

import User from '../models/user';
import config from '../config';

export const signup = async (req, res, next) => {
  const credentials = req.body;
  let user;

  if (credentials.key !== config.createKey) {
    res.json({ error: 'Incorrect key!' });
  }

  try {
    user = await User.create(credentials);
  } catch ({ message }) {
    return next({
      status: 400,
      message
    });
  }

  res.json(user);
}

export const signin = async (req, res, next) => {
  const { login, password } = req.body;

  const user = await User.findOne({ login });

  if (!user) {
    return next({
      status: 400,
      message: 'User not found!'
    });
  }

  try {
    const result = await user.comparePasswords(password);
  } catch (err) {
    return next({
      status: 400,
      message: 'Bad credentials!'
    });
  }

  const token = jwt.sign({ _id: user._id }, config.secret);
  res.json(token);
}
