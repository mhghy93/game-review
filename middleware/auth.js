const jwt = require('jsonwebtoken');

const isAuthenticated = (req, res, next) => {
  const token = req.header('x-auth-token');

  if (!token) {
    return res.status(401).json({ msg: 'authorization denied' });
  }

  try {
    jwt.verify(token, process.env.JWT_SECRET, (error, decoded) => {
      if (error) {
        return res.status(401).json({ msg: 'Token is not valid' });
      } else {
        req.user = decoded.user;
        next();
      }
    });
  } catch (err) {
    console.error('Token error', err);
    res.status(500).json({ msg: 'Server Error' });
  }
};

const isAdmin = async (req, res, next) => {
  const token = req.header('x-auth-token');

  if (!token) {
    return res.status(401).json({ msg: 'authorization denied' });
  }

  try {
    jwt.verify(token, process.env.JWT_SECRET, (error, decoded) => {
      if (error) {
        return res.status(401).json({ msg: 'Token is not valid' });
      } else {
        req.user = decoded.user;
        if (req.user.isAdmin) {
          next();
        } else {
          return res.status(401).json({ msg: 'authorization denied' });
        }
      }
    });
  } catch (err) {
    console.error('Token error', err);
    res.status(500).json({ msg: 'Server Error' });
  }
};

const notAdmin = async (req, res, next) => {
  const token = req.header('x-auth-token');

  if (!token) {
    return res.status(401).json({ msg: 'authorization denied' });
  }

  try {
    jwt.verify(token, process.env.JWT_SECRET, (error, decoded) => {
      if (error) {
        return res.status(401).json({ msg: 'Token is not valid' });
      } else {
        req.user = decoded.user;
        if (req.user.isAdmin) {
          return res.status(401).json({ msg: 'authorization denied' });
        } else {
          next();
        }
      }
    });
  } catch (err) {
    console.error('Token error', err);
    res.status(500).json({ msg: 'Server Error' });
  }
};

module.exports = { isAuthenticated, isAdmin, notAdmin };
