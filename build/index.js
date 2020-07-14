"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importStar(require("express"));
var index_1 = require("./routes/index");
var mongoose_1 = __importDefault(require("mongoose"));
var config_1 = require("./config");
var constants_1 = require("./constants");
var app = express_1.default();
var PORT = 8000;
app.use(express_1.urlencoded({ extended: true }));
app.use(express_1.default.json());
app.use('/api', index_1.router);
mongoose_1.default.connect(config_1.dbUrl, { useNewUrlParser: true, useUnifiedTopology: true }, function () {
    if (config_1.env === constants_1.development)
        console.log("MongoDb connected successfully");
});
app.listen(PORT, function () {
    if (config_1.env === constants_1.development)
        console.log("listening' on the port", PORT);
});
