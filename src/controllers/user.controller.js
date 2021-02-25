const usersCtrl = {};

const modelUser = require('../models/User')


usersCtrl.getUsers = async (req, res) => {
    console.log(req.body);
    const user = await modelUser.find();
    res.json(user);
};


usersCtrl.postUsers = async (req, res) => {
    const { username, journalist, password, email } = req.body;
    
    if (req.body.username, req.body.journalist, req.body.password, req.body.email != undefined) {
        const newUser = new modelUser({
            username: username,
            journalist: journalist,
            password: password,
            email: email
            
        })
        newUser.password = await newUser.encryptPass(password)
        await newUser.save();
        res.json('Se ha guardado correctamente');

    } else {
        console.log("datos salida " + req.body.username)
    }

};


usersCtrl.putUsers = async (req, res) => {
    const { username, journalist, password, email } = req.body;
    await modelUser.findOneAndUpdate({ _id: req.params.id }, {
        username: username,
        journalist: journalist,
        password: password,
        email: email
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