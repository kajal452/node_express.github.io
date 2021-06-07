const bcrypt = require('bcrypt');
const User = require('../../models/User.model');
module.exports.postLogin = async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email: email });
    const msg = { msg: 'Invalid Login Credential' }
    if (user) {
        const match = await bcrypt.compare(password, user.password);
        if (match) {
            res.status(200).json(user);
        } else {
            res.status(401).json(msg);
        }
    } else {
        res.status(401).json(msg);
    }
}
module.exports.postUpdateProfile = async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email: email });
    const msg = { msg: 'Invalid Login Credential' };
    if (user) {
        const match = await bcrypt.compare(password, user.password);
        if (match) {
            res.status(200).json(user);
        }
    }
    res.status(401).json(msg);
}