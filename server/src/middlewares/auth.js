const jwt = require('jsonwebtoken');
const Teacher = require('../models/Teacher');

module.exports.auth = async (req, res, next) => {
  const token = req.header('auth-token');
  if (!token) return res.status(401).send({ error: 'Access Denied' });

  try {
    const verified = jwt.verify(token, process.env.TOKEN_SECRET);
    const teacher = await Teacher.findOne({ _id: verified });
    if (teacher) {
      req.teacher = verified;
    } else {
      res
        .status(400)
        .send({ error: 'The account you are trying to find no longer exists.' });
    }
  } catch (err) {
    res.status(400).send({ error: 'Invalid Token' });
  }
  next();
};