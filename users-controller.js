const { User, get } = require('./user-model.js');

const index = (req, res) => {
    get((err, user) => {
        if (err) {
            res.json({
                status: 'error',
                message: err.message
            });
        } else {
            res.json({
                status: 'success',
                message: 'Users',
                data: user
            });
        }
    })
};

const signUp = (req, res) => {
    const { name, surname, email, password, role } = req.body;

    User.find({ email }, (err, arr) => {
        if (err) {
            res.json({
                status: 'error',
                message: err.message
            });
        } else {
            if (arr.length > 0) {
                res.json({
                    status: 'error',
                    message: 'EMAIL_EXISTS',
                });
            } else {
                const user = new User();
                user.name = name;
                user.surname = surname;
                user.email = email;
                user.password = password;
                user.role = role;

                user.save((err) => {
                    if (err) {
                        res.json({
                            status: 'error',
                            message: err.message
                        })
                    } else {
                        res.json({
                            status: 'success',
                            message: 'User added',
                            data: user
                        });
                    }
                });
            }
        }
    });
};

const signIn = (req, res) => {
    const { email, password } = req.body;

    User.find({ email }, (err, arr) => {
        if (err) {
            res.json({
                status: 'error',
                message: err.message
            });
        } else {
            if (arr.length === 0) {
                res.json({
                    status: 'error',
                    message: 'EMAIL_NOT_FOUND',
                });
            } else {
                const user = arr.find(el => el.password === password);
                if (!user) {
                    res.json({
                        status: 'error',
                        message: 'INVALID_PASSWORD',
                    });
                } else {
                    res.json({
                        status: 'success',
                        message: 'User found',
                        data: user
                    });
                }
            }
        }
    });
};

const view = (req, res) => {
    User.findById(req.params.user_id, (err, user) => {
        if (err) {
            res.json({
                status: 'error',
                message: err.message
            })
        } else {
            res.json({
                status: 'success',
                message: 'User details',
                data: user
            });
        }
    });
};

const update = (req, res) => {
    const { name, surname, email } = req.body;
    User.findById(req.params.user_id, (err, user) => {
        if (err) {
            res.json({
                status: 'error',
                message: err.message
            })
        };
        user.name = name;
        user.surname = surname;
        user.email = email;
        user.save((err) => {
            if (err) {
                res.json(err);
            } else {
                res.json({
                    status: 'success',
                    message: 'User updated',
                    data: user
                });
            }
        });
    });
};

const remove = (req, res) => {
    User.deleteOne({
        _id: req.params.user_id
    }, (err, contact) => {
        if (err) {
            res.json({
                status: 'error',
                message: err.message
            })
        } else {
            res.json({
                status: 'success',
                message: 'User deleted'
            })
        }
    })
}

module.exports = {
    index,
    view,
    update,
    remove,
    signUp,
    signIn
};
