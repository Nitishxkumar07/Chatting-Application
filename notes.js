//  we can send a message to a community using s.cket.to("community name").emit("event_name", data);

// we can also send data to the all connected user using a broadcast 
// socket.to(soclet.id).emit("event_name", data);
// socket = indivisual level
// io = global level
// socket.broadcast.emit = send to every one except sender







// 1. Server-Side API (io and socket)
// The server-side API revolves around two main objects: io (the main server instance) and socket (an individual client connection).

// A. The Global Server Instance (io)
// io.on('connection', (socket) => { ... })

// Listens for a new client connecting to the server. Every connecting client gets a unique socket object.

// io.emit('event_name', data)

// Broadcasts an event to all connected clients (including the sender).

// io.to('room_name').emit('event_name', data)

// Sends an event to everyone inside a specific room.

// B. The Individual Client Connection (socket)
// socket.id

// A unique, auto-generated string identifier for that specific client session (e.g., G5d8...).

// socket.on('event_name', (data) => { ... })

// Listens for a custom event sent by this specific client.

// socket.emit('event_name', data)

// Sends an event back to only this specific client.

// socket.broadcast.emit('event_name', data)

// Sends an event to all clients except the sender.

// socket.join('room_name') / socket.leave('room_name')

// Adds or removes the client from a specific room (useful for private chats or group channels).

// socket.on('disconnect', () => { ... })

// Listens for when this client closes the tab, loses connection, or disconnects.

// 2. Client-Side API (io)
// The client-side JavaScript library runs in the browser and handles communication back to the server.

// const socket = io();

// Initializes the connection to the Socket.io server. If hosted on the same domain, it automatically connects to the current host/port.

// socket.on('event_name', (data) => { ... })

// Listens for events sent from the server.

// socket.emit('event_name', data)

// Sends custom data or events up to the server.

// socket.disconnect()

// Manually disconnects the client from the server.

// socket.connect()

// Reconnects the client if it was previously disconnected.

