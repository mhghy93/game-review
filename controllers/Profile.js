const User = require('../models/User');

exports.showProfile = async (req, res) => {
  try {
    const profile = await User.findOne(
      {
        attributes: ['firstname', 'lastname', 'username', 'email', 'createdAt'],
        where: { id: req.user.id },
      }
      //   { where: { id: req.user.id } }
    );
    res.json(profile);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.editProfile = (req, res) => {};

exports.deleteProfile = (req, res) => {};
