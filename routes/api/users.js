//require auth to be tied to the post
const passport = require("../../passport");

//backend routes
const router = require("express").Router();
const userController = require("../../controllers/userController");

// Matches with "/api/books"
router.route("/")
    .post(userController.create);
    
    // Matches with "/api/books/:id"
    router
    .route("/:id")
    .get(userController.findById)
    .put(userController.update)
    .delete(userController.remove);
  
    router.post(
        '/login',
        function (req, res, next) {
            console.log(req.body)
            console.log("%%%%%%%%%%%%%");
            next()
        },
        passport.authenticate('local'),
        (req, res) => {
            console.log('logged in', req.user);
            var userInfo = {
                userName: req.user.userName,
                firstName: req.user.firstName,
                lastName: req.user.lastName
            };
            res.send(userInfo);
        }
    );

    router.get('/', (req, res, next) => {
        console.log('===== user!!======')
        console.log(req.user)
        if (req.user) {
            res.json({ user: req.user })
        } else {
            res.json({ user: null })
        }
    })
    router.post('/logout', (req, res) => {
        if (req.user) {
            req.logout()
            res.send({ msg: 'logging out' })
        } else {
            res.send({ msg: 'no user to log out' })
        }
    })
//    router.route("/login")
//    .post(userController.login);

module.exports = router;
