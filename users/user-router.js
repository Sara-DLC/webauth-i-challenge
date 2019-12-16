const router = require('express').Router();

const db = require('./users-model');

router.get('/users', (req, res) => {
    db.find()
    .then(users => {
        res.json(users);
    })
    .catch(error => res.send(error));
});

module.exports = router;