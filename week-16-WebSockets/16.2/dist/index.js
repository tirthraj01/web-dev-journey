import { WebSocketServer, WebSocket } from "ws";
const wss = new WebSocketServer({ port: 8080 });
let allSockets = [];
wss.on("connection", (socket) => {
    console.log("user connected");
    socket.on("message", (message) => {
        // @ts-ignore
        const parseMessage = JSON.parse(message);
        if (parseMessage.type === "join") {
            console.log("user joined room " + parseMessage.payload.roomId);
            allSockets.push({
                socket: socket,
                room: parseMessage.payload.roomId
            });
        }
        if (parseMessage.type === "chat") {
            console.log("user wants to chat");
            let currentUserRoom = null;
            for (let i = 0; i < allSockets.length; i++) {
                if (allSockets[i].socket === socket) {
                    currentUserRoom = allSockets[i].room;
                }
            }
            for (let i = 0; i < allSockets.length; i++) {
                if (allSockets[i].room === currentUserRoom) {
                    allSockets[i].socket.send(parseMessage.payload.message);
                }
            }
        }
    });
});
//# sourceMappingURL=index.js.map