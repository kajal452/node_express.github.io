const bcrypt = require('bcrypt');
const User = require('../../models/User.model');
module.exports.postLogin = async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email: email });
    const msg = { msg: 'Invalid Login Credential' }
    if (user) {
        const match = await bcrypt.compare(password, user.password);
        if (match) {
            res.json({'token':user._id});
        } else {
            res.status(401).json(msg);
        }
    } else {
        res.status(401).json(msg);
    }
}
module.exports.postUpdateProfile = async (req, res) => {
    const id = req.token;
    try{
        const user = await User.findByIdAndUpdate(id,{...req.body});
        res.json({'msg':'User Profile Update Succefully'});
    }catch(e){
        res.status(500);
    }

}