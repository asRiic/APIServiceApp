const userSchema = require('../models/User');

const signIn = async (req, res) => {
    const userFound = await userSchema.findOne({username: req.body.username})
    if(!userFound) return res.status(400).json({message: "user no encontrado"})
    console.log(userFound)
}
