"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginRestaurantController = void 0;
var config_1 = require("../config");
function loginRestaurantController(req, res, next) {
    var _a = req.body, username = _a.username, roleId = _a.roleId;
    console.log(roleId);
    console.log(username);
    console.log(config_1.env);
    res.send("hello world");
}
exports.loginRestaurantController = loginRestaurantController;
