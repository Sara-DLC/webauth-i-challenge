const router = require('express').Router();

const db = require('../users/users-model');
const restrict = require('../auth/middleware');



router.get('/', restrict, (req, res) => {
    db.find()
    .then(users => {
        res.json(users);
    })
    .catch(error => res.send(error));
});


module.exports = router;