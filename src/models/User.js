const { Schema, model } = require('mongoose');
const bcript = require('bcryptjs');
const { schema } = require('./Role');

const userSchema = new Schema({
    username: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    rol: [
        {
            type: Schema.Types.ObjectId,
            ref: "Role",
            require: true
        },
    ]
}, {
    timestamps: true,
    versionKey: false
});

userSchema.methods.encryptPass = async password => {
    const salt = await bcript.genSalt(10);
    return await bcript.hash(password, salt);
};

userSchema.methods.matchPass = async function (password) {
    return await bcrypt.compare(password, this.password)
}

module.exports = model('userModel', userSchema);
