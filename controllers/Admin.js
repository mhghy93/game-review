const User = require('../models/User');
const Review = require('../models/Review');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { Op } = require('sequelize');

exports.adminLogin = async (req, res) => {
  const { email, password } = req.body;

  try {
    let user = await User.findOne({ where: { email: email } });
    if (!user) {
      return res.status(400).json({ errors: [{ msg: 'Invalid Credentials' }] });
    }

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

exports.showAllUsers = async (req, res) => {
  try {
    const users = await User.findAll({
      attributes: [
        'id',
        'firstname',
        'lastname',
        'username',
        'email',
        'createdAt',
        'updatedAt',
      ],
      where: { isAdmin: false },
    });
    res.json(users);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.showUserDetail = async (req, res) => {
  try {
    const user = await User.findOne({
      attributes: ['firstname', 'lastname', 'username', 'email', 'createdAt'],
      where: { id: req.params.id, [Op.and]: [{ isAdmin: false }] },
    });

    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.showUserReviews = async (req, res) => {
  try {
    const review = await Review.findAll({
      attributes: ['id', 'review', 'gameId', 'userId', 'rating', 'createdAt'],
      where: { userId: req.params.id },
    });

    res.json(review);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.loadAdmin = async (req, res) => {
  try {
    const profile = await User.findOne({
      attributes: ['username'],
      where: { id: req.user.id, [Op.and]: [{ isAdmin: true }] },
    });
    res.json(profile);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

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

exports.deleteUserReview = async (req, res) => {
  try {
    await Review.destroy({ where: { id: req.params.id } });
    res.json({ msg: 'Review Deleted' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};
