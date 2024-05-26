"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userSockets = exports.mdp = exports.mail = exports.secret = exports.jwtToken = exports.corsOptions = exports.whitelist = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
// WHITELIST
exports.whitelist = ['http://localhost:5173'];
// CORS
exports.corsOptions = {
    origin: true,
    credentials: true,
};
exports.jwtToken = process.env.JWT_SECRET || 'jwt_secret_not_found';
exports.secret = process.env.SESSION_SECRET || 'session_secret_not_found';
exports.mail = process.env.MAIL || 'mail_not_found';
exports.mdp = process.env.MDP_SECRET || 'mdp_secret_not_found';
exports.userSockets = new Map();
//# sourceMappingURL=constant.js.map