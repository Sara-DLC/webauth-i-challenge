// server.get('/api/users', restricted, (req, res) => {
//     db.find()
//     .then(users => {
//         res.json(users);
//     })
//     .catch(error => res.send(error));
// });


// server.post('/api/register', (req, res) => {
//     const user = req.body;

//     const hash = bcrypt.hashSync(user.password, 8);

//     user.password = hash;

//     db.add(user)
//     .then(saved => {
//     res.status(201).json(saved);
//     })
//     .catch(error => {
//     res.status(500).json(error);
//     });
// });


// server.post('/api/login', (req, res) => {
//     let { username, password } = req.body;

//     db.findBy({ username })
//     .first()
//     .then(user => {
//     if (user && bcrypt.compareSync(password, user.password)) {
//         res.status(200).json({ message: `Logged In ${user.username}!` });
//     } else {
//         res.status(401).json({ message: "You shall not pass!" });
//     }
//     })
//     .catch(error => {
//     res.status(500).json(error);
//     });
// });

// server.get('/logout', (req, res) => {
//     req.session.destroy(error => {
//         error ? res.status(500).json({ message: "Already logged out"}) 
//         : res.status(200).json({ message: 'logged out'}) 
//     });
// });