"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const setupWebsocketServer = (io) => {
    io.on('connection', (socket) => {
        console.log(`Client connected: ${socket.id}`);
        socket.on('new-message', (message) => {
            io.emit('message-received', message);
        });
        socket.on('agenda-update', (update) => {
            io.emit('agenda-update', update);
        });
        socket.on('disconnect', () => {
            console.log(`Client disconnected: ${socket.id}`);
        });
    });
};
exports.default = setupWebsocketServer;
//# sourceMappingURL=socket.js.map