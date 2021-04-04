const router = require('express').Router();
const {
    index,
    view,
    update,
    remove,
    signUp,
    signIn
} = require('./users-controller.js');

router.get('/', (req, res) => {
    res.json({
        status: 'success',
        message: 'Welcome to API'
    });
});

// router.route('/users')
//     .get(index);

// router.route('/users/:user_id')
//     .get(view)
//     .patch(update)
//     .put(update)
//     .delete(remove);

router.route('/users/signUp')
    .post(signUp);

router.route('/users/signIn')
    .post(signIn);

module.exports = router;