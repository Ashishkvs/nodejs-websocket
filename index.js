import { createServer } from "http";
import { Server } from "socket.io";

const httpServer = createServer();
httpServer.listen(3000);
const io = new Server(httpServer, {
  cors: {
    origin: "http://localhost:4200"
  }
});

io.on('connection', socket => {
    socket.emit('chat-message', 'Hello Friends1111222')
})