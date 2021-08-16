const Role = require('../models/Role');

 const createRoles = async () => {
    try {
        const count = await Role.estimatedDocumentCount()

        if (count > 0) return;

        const value = await Promise.all([
            new Role({ name: 'Admin' }).save(),
            new Role({ name: 'Moder' }).save(),
            new Role({ name: 'User' }).save()
        ])
        console.log(value)
    } catch (error) {
        console.error(error)
    }
}

exports.createRoles = createRoles;