const path = require('path');
const http = require('http');
const express = require('express');
// const socketIO = require('socket.io');
let app = express();
let server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);


// const publicPath = path.join(__dirname, '/public');
const port = process.env.PORT || 3001;

// let io = socketIO(server);

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html')
})

server.listen(port, () => {
    console.log(`Server is up on port ${port}.`)
})


io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on('disconnect', () => {
        console.log('user disconnected');
      });
    socket.on('chat message', (msg) => {
        console.log('message: ' + msg);
      });
});