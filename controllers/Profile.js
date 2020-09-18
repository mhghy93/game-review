const User = require('../models/User');
const { Op } = require('sequelize');

exports.showProfile = async (req, res) => {
  try {
    const profile = await User.findOne({
      attributes: ['firstname', 'lastname', 'username', 'email', 'createdAt'],
      where: { id: req.user.id },
    });
    res.json(profile);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.editProfile = async (req, res) => {
  const { firstname, lastname, username, email } = req.body;

  try {
    const usernameExists = await User.findOne({
      where: { username: username, [Op.not]: [{ id: req.user.id }] },
    });
    const emailExists = await User.findOne({
      where: { email: email, [Op.not]: [{ id: req.user.id }] },
    });

    if (usernameExists) {
      return res
        .status(400)
        .json({ errors: [{ msg: 'This username already exists' }] });
    }

    if (emailExists) {
      return res
        .status(400)
        .json({ errors: [{ msg: 'This email already exists' }] });
    }

    await User.update(
      {
        firstname: firstname,
        lastname: lastname,
        username: username,
        email: email,
      },
      { where: { id: req.user.id } }
    );
    res.json({ msg: 'Successfully updated' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.deleteProfile = (req, res) => {};
