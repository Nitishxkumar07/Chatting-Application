import { Server } from "socket.io";
import express from "express";
import { createServer } from 'node:http';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const PORT = process.env.PORT || 4000
const app = express();
const server = createServer(app);
const io = new Server(server, {
  connectionStateRecovery: {}
});

const __dirname = dirname(fileURLToPath(import.meta.url));

app.get('/', (req, res) => {
    res.sendFile(join(__dirname, 'index.html'));
});

io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on('chat_message', (msg) => {
        // console.log('chat_message =>'+ msg);
        io.emit("chat_message", msg)
    });
    socket.on('disconnect', () => {
        console.log(`User disconnected": ${socket.id}`);
    });
});

server.listen(PORT, () => console.log(`Server is running on PORT : ${PORT}`))

