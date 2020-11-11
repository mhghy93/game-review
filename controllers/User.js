const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.register = async (req, res) => {
  const { firstname, lastname, username, email, password } = req.body;

  try {
    const emailExists = await User.findOne({ where: { email: email } });
    const usernameExists = await User.findOne({
      where: { username: username },
    });

    if (emailExists) {
      return res
        .status(400)
        .json({ errors: [{ msg: 'This email already exists' }] });
    }

    if (usernameExists) {
      return res
        .status(400)
        .json({ errors: [{ msg: 'This username already exists' }] });
    }

    let user = {
      firstname,
      lastname,
      username,
      email,
      password,
    };

    const salt = await bcrypt.genSalt(10);

    user.password = await bcrypt.hash(password, salt);

    await User.create(user);

    const payload = {
      user: {
        id: user.id,
      },
    };

    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: '5 days' },
      (err, token) => {
        if (err) throw err;
        res.json({ token });
      }
    );
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    let user = await User.findOne({ where: { email: email } });
    if (!user) {
      return res.status(400).json({ errors: [{ msg: 'Invalid Credentials' }] });
    }
    console.log('user: ', user);

    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
      return res.status(400).json({ errors: [{ msg: 'Invalid Credentials' }] });
    }

    const payload = {
      user: {
        id: user.id,
        isAdmin: user.isAdmin,
      },
    };

    if (payload.user.isAdmin) {
      return res.status(400).json({ errors: [{ msg: 'Invalid Credentials' }] });
    }

    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: '5 days' },
      (err, token) => {
        if (err) throw err;
        res.json({ token });
      }
    );
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};
