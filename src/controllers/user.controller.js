const usersCtrl = {};
const jwt = require('jsonwebtoken');
const modelUser = require('../models/User')
const moduleRol = require('../models/Role');


usersCtrl.getUsers = async (req, res) => {
    console.log(req.body);
    const user = await modelUser.find();
    res.json(user);
};


usersCtrl.postUsers = async (req, res) => {
    const { username, password, name, lastname, email, rol } = req.body;

    if (username || password || name || lastname || email || rol != undefined) {
        const newUser = new modelUser({
            username: username,
            password: password,
            name: name,
            lastname: lastname,
            email: email,
            rol: rol
        })
        newUser.password = await newUser.encryptPass(password);
        
        if (rol) {
            const foundRoles = await moduleRol.find({name: {$in: rol}})
            newUser.rol = foundRoles.map(role => role._id)
        } else {
            const role = await rol.findOne({name:"User"})
            newUser.rol = [role._id];
        }

        const savedUser = await newUser.save();
        const token = jwt.sign({id: savedUser._id}, process.env.SECRET_WORD, {
            expiresIn: 3600 //representados en seg
        })
        res.json({token});

    } else {
        console.log("datos salida " + req.body.username)
    }

};


usersCtrl.putUsers = async (req, res) => {
    const { username, password, name, lastname, email, rol } = req.body;
    await modelUser.findOneAndUpdate({ _id: req.params.id }, {
        username: username,
            password: password,
            name: name,
            lastname: lastname,
            email: email,
            rol: rol
    })
    res.json('Se ha modificado correctamente');
};


usersCtrl.deleteUsers = async (req, res) => {
    await modelUser.findByIdAndDelete({ _id: req.params.id });
    res.json('Se ha eliminado correcamente');
}


usersCtrl.getUser = async (req, res) => {
    const user = await modelUser.findById({ _id: req.params.id });
    res.json(user);
}


module.exports = usersCtrl;