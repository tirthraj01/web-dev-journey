import { WebSocketServer, WebSocket } from "ws";

const wss = new WebSocketServer({ port: 8081 });

wss.on("connection", (socket) => {
  console.log("User connected. Total:", wss.clients.size);

  socket.on("message", (message) => {
    const text = message.toString();
    for (const client of wss.clients) {
      if (client !== socket && client.readyState === WebSocket.OPEN) {
        client.send(text + ": sent from the server");
      }
    }
  });

  socket.on("close", () => {
    console.log("User disconnected. Total:", wss.clients.size);
  });

  socket.on("error", console.error);
});
