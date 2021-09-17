const express = require('express');
const router = express.Router();
const sequelize = require('../db');

//Get all users
router.get('/', async (req, res) => {
    const users = await sequelize.models.users.findAndCountAll();
    return res.status(200).json({ data: users });
});

//Create a new user
router.post('/', async (req, res) => {
    const { body } = req;
    const user = await sequelize.models.users.create({
        firstName: body.firstName,
        lastName: body.lastName,
        userName: body.userName,
        userType: body.userType,
        email: body.email,
        password: body.password
    });
    await user.save();
    return res.status(200).json({ data: user});
});

//Update an user by id
router.put('/:id', async (req, res) => {
    const {body, params: {id} } = req;
    const user = await sequelize.models.users.findByPk(id);
    if(!user) {
        return res.status(404).json({code: 404, message: 'User not found'});
    }
    const updatedUser = await user.update({
        firstName: body.firstName,
        lastName: body.lastName,
        userName: body.userName,
        userType: body.userType,
        email: body.email,
        password: body.password
    });
    return res.json({ data: updatedUser});
});

//Delete an user by id
router.delete('/:id', async (req, res) => {
    const {params: {id}} = req;
    const user = await sequelize.models.users.findByPk(id);
    if(!user) {
        return res.status(404).json({code: 404, message: 'User not found'});
    }
    await user.destroy();
    return res.json();
});

module.exports = router;