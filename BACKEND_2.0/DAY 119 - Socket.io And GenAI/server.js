import app from "./src/app.js"
import { createServer } from "http";
import { Server } from "socket.io";

// io => SERVER
// socket => SINGLE USER

// on => EVENT LISNER
// emit => FIRE THE EVENT



const httpServer = createServer(app);
const io = new Server(httpServer, { /* options */ });

io.on("connection", (socket) => {
    console.log("New Connection Created")

    socket.on("message", (msg) => {
        console.log("user fired message event")
        console.log(msg)
        io.emit("abc", msg)
    })
});


httpServer.listen(3000, () => {
    console.log("Server is runing on port 3000");
})