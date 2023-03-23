const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const User = require('../models/user');
const authConfig = require('../config/auth');

const router = express.Router();

function generateToken(params = {}) {
    return jwt.sign(params, authConfig.secret, {
        expiresIn: 86400,
    });
}

router.post('/register', async (req, res) => {

    /*
    Exemplo de requisição:
    {
        "name" : "Kleberson", 
        "email" : "asofdhsafo@gmail.com",
        "password" : "fasidfghsdiads", 
    }
    */
    	
    //const user = req.body;

    const { email } = req.body;

    try {

        if (await User.findOne({ email: email })) {
            return res.status(400).send({ erro: 'User already registered' });
        }

        const user = await User.create(req.body);

        user.password = undefined;

        const token = generateToken({ id: user.id });


        return res.status(201).send({ user, token });
    }
    catch (err) {
        return res.status(500).send({ erro: `Registration failed, ${err}` });
    }
});

router.post('/authenticate', async (req, res) => {
    
    /*
    Exemplo de requisição:
    {
        "email" : "",
        "password" : "fasidfghsdiads",
    }
    */
    
    const { email, password } = req.body;

    try{
        const user = await User.findOne({ email: email }).select('+password');

        if (!user) {
            return res.status(404).send({ erro: 'User not found' });
        }

        if (!await bcrypt.compare(password, user.password)) {
            return res.status(400).send({ erro: 'Invalid password' });
        }

        user.password = undefined;

        const token = generateToken({ id: user.id });

        res.status(200).send({ user, token });
    }
    catch(err) {
        return res.status(500).send({ erro: `Authentication failed, ${err}` });
    }
});

router.delete('/delete', async (req, res) => {

    /*
    Exemplo de requisição:
    {
        "email" : "siudasdhasdiouh@gmail.com"
    }
    */

    const { email } = req.body;
    
    try {
        const user = await User.findOneAndRemove({ email });

        if (typeof email != 'string') {
            return res.status(400).send({ erro:  `Field email shoud be a string`});
        }
        else if (!user) {
            return res.status(404).send({ erro: 'User not found' });
        }
    
        return res.status(204).send();
    }
    catch(err) {
        return res.status(500).send({ erro: `Delete failed ${err}` });
    }
});

router.get('/list', async (req, res) => {

    const { name, email, createdAt } = req.query;

    let query = {};
    
    try {

        if (name) {
            query.name = name;
        }
        if (email) {
            query.email = email;
        }
        if (createdAt) {
            query.createdAt = createdAt;
        }

        const users = await User.find( query );

        if (users.length === 0) {
            return res.status(404).send({ erro: 'Users not found' });
        }

        return res.status(200).send({ users });

    }catch(err) {
        return res.status(500).send({ erro: `Error ${err}` });
    }
});


// APENAS PARA DEBUG
router.delete('/delete-all', async (req, res) => {
    try {
        await User.deleteMany({});
        return res.status(204).send();
    }catch(err) {
        return res.status(500).send({ erro: `Error ${err}` });
    }
});

module.exports = app => app.use('/auth', router);