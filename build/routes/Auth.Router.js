"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginRouter = void 0;
var express_1 = __importDefault(require("express"));
var Auth_controller_1 = require("../controllers/Auth.controller");
var express_joi_validation_1 = require("express-joi-validation");
var Auth_validator_1 = require("../validators/Auth.validator");
var validator = express_joi_validation_1.createValidator({});
exports.loginRouter = express_1.default.Router();
exports.loginRouter.route('/loginRestaurant')
    .post(validator.body(Auth_validator_1.loginRestaurantValidator), Auth_controller_1.loginRestaurantController);
