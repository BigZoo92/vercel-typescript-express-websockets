"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.io = void 0;
const express_1 = __importDefault(require("express"));
const helmet_1 = __importDefault(require("helmet"));
const http_1 = __importDefault(require("http"));
const morgan_1 = __importDefault(require("morgan"));
const compression_1 = __importDefault(require("compression"));
const cors_1 = __importDefault(require("cors"));
const constant_1 = require("./constant");
const socket_io_1 = require("socket.io");
const app = (0, express_1.default)();
app.use((0, helmet_1.default)());
app.use((0, cors_1.default)(constant_1.corsOptions));
app.use((0, compression_1.default)());
app.use((0, morgan_1.default)('dev'));
app.use(express_1.default.json());
const server = http_1.default.createServer(app);
const port = process.env.PORT || 8080;
exports.io = new socket_io_1.Server(server, {
    cors: {
        origin: '*',
    },
});
app.get('/', (_req, res) => {
    return res.send('Express Typescript on Vercel');
});
app.get('/ping', (_req, res) => {
    return res.send('pong 🏓');
});
server.listen(port, () => {
    return console.log(`Server is listening on ${port}`);
});
//# sourceMappingURL=index.js.map