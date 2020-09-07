const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.register = async (req, res) => {
  const { firstname, lastname, username, email, password } = req.body;

  console.log("hello");

  try {
    let user = await User.findOne({ where: { email: email } });
    if (user) {
      return res.status(400).json({ errors: [{ msg: "User already exists" }] });
    }

    user = {
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
      { expiresIn: "5 days" },
      (err, token) => {
        if (err) throw err;
        res.json({ token });
      }
    );
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};

exports.login = (req, res) => {
  res.send("hello");
};
