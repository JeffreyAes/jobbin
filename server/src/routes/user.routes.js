const { authenticate } = require('../config/jwt.config');
const UserController = require('../controllers/user.controller');
module.exports = function (app) {
    app.post("/api/register", UserController.register);
    app.post("/api/login", UserController.login);
    app.get("/api/logout", authenticate, UserController.logout)
    app.get('/api/users',  UserController.getAllUsers);
    app.get('/api/users/:id', authenticate, UserController.getUser);
    app.put('/api/users/:id', authenticate, UserController.updateUser);
    app.delete('/api/delete/:id', authenticate, UserController.deleteUser);


}