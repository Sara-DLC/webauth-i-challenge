const router = require('express').Router();

const authUserRouter = require('../auth/auth-router');
const usersRouter = require('../users/user-router');

router.use('./auth', authUserRouter);
router.use('./users', usersRouter);

router.get('/', (req, res) => {
    res.json({ api: "working" });
});

module.exports = router;