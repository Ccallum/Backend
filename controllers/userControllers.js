const User = require('../models/userModel');

function createUser(req, res) {
  const newUser = new User(req.body);

  newUser.save((err, userInfo) => {
    if (err) return res.status(400).send(`Error in userController: ${err.message}`);
    return res.status(200).send(userInfo);
  });
}

function getUserByEmail(req, res) {
  User.findOne({ email: req.params.email }, (err, user) => {
    if (err) return res.status(400).send(`Error in userController: ${err.message}`);
    return res.status(200).send(user);
  });
}

function deleteUser(req, res) {
  User.findByIdAndDelete(req.params.usserId, (err) => {
    if (err) return res.status(400).send(`Failed to delete: ${err.message}`);
    return res.status(200).send({ msg: `User ${req.params.userId} deleted` });
  });
}
function updateUser(req, res) {
  User.findByIdAndUpdate(req.params.userId, req.body, (err, updatedUser) => {
    if (err) return res.status(400).send(`Failed to update: ${err.message}`);
    return res.status(200).send({ msg: 'update ok', updatedUser });
  });
}

module.exports = {
  getUserByEmail,
  deleteUser,
  updateUser,
  createUser,
};
