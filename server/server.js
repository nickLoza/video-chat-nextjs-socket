const express = require("express");
const http = require("http");
const app = express();
const server = http.createServer(app);

const { Server } = require("socket.io");

const io = new Server(server, {
  cors: {
    origin: 'https://video-chat-nextjs-socket-nick.vercel.app',
  },
})

const rooms = {};

io.on("connection", socket => {
    socket.on("join room", roomID => {
        currentRoom = rooms[roomID]
        console.log(roomID)
        if (rooms[roomID]) {
            rooms[roomID].push(socket.id);
        } else {
            rooms[roomID] = [socket.id];
        }
        const otherUser = rooms[roomID].find(id => id !== socket.id);
        if (otherUser) {
            socket.emit("other user", otherUser);
            socket.to(otherUser).emit("user joined", socket.id);
        }
    });

    socket.on("offer", payload => {
        io.to(payload.target).emit("offer", payload);
    });

    socket.on("answer", payload => {
        io.to(payload.target).emit("answer", payload);
    });

    socket.on("ice-candidate", incoming => {
        io.to(incoming.target).emit("ice-candidate", incoming.candidate);
    });

   let userID = socket.id
    socket.on("disconnect", () => {
    // Find the room where the user is present
    const roomID = Object.keys(rooms).find(key => rooms[key].includes(userID));
    if (roomID) {
      // Remove the user from the room
      rooms[roomID] = rooms[roomID].filter(id => id !== userID);

      
      if (rooms[roomID].length === 0) {
        delete rooms[roomID];
      }
    }
  });
});


server.listen(8000, () => console.log('server is running on port 8000'));