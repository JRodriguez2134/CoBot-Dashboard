const WebSocket = require("ws");

const wss = new WebSocket.Server({port: 8082});

wss.on("connection", ws => {
    console.log("New client has connected");

    ws.on("message", data => {
        console.log(`Client has sent: ${data}`);
        ws.send("got your message");
    });

    ws.on("close", () => {
        console.log("Client has disconnected");
    });
});