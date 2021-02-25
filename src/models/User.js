const { Schema, model } = require('mongoose');
const bcript = require('bcryptjs');

const userSchema = new Schema({
    username: {
        type: String,
        require: true,
        unique: true
    },
    journalist: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

userSchema.methods.encryptPass = async password => {
    const salt = await bcript.genSalt(10);
    return await bcript.hash(password, salt);
};

userSchema.methods.matchPass = async function (password) {
    return await bcrypt.compare(password, this.password)
}

module.exports = model('userModel', userSchema);
