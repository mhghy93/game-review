const User = require('../models/User');
const Review = require('../models/Review');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.adminLogin = async (req, res) => {
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

    if (!payload.user.isAdmin) {
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

exports.showAllUsers = (req, res) => {};

exports.deleteUser = async (req, res) => {
  try {
    await Review.destroy({ where: { userId: req.params.id } });
    await User.destroy({ where: { id: req.params.id } });
    res.json({ msg: 'User Account Has Been Deleted' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};
