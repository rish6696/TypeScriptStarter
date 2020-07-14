"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginRestaurantValidator = void 0;
var joi_1 = __importDefault(require("@hapi/joi"));
exports.loginRestaurantValidator = joi_1.default.object({
    restaurantId: joi_1.default.string().required(),
    username: joi_1.default.string().required(),
    password: joi_1.default.string().required(),
    roleId: joi_1.default.number().required()
});
