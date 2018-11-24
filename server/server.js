const path = require('path');
const http = require('http');
const express = require('express');
const socketIO=require('socket.io');

const publicPath = path.join(__dirname,'../public');
const port =process.env.PORT||3000;
var app = express();
var server = http.createServer(app);
var io =socketIO(server);

app.use(express.static(publicPath)); // configure static middleware

io.on('connection',(socket)=>{
  console.log('New User Connected');

  // socket.emit('newMessage',{
  //   from:'blabla@blablabla.com',
  //   text:'Yep you',
  //   createdAt:333
  // });//emites the event to a certain connection

  socket.on('createMessage',(newMessage)=>{
    console.log('createMessage',newMessage);
    io.emit('newMessage',{
      from:newMessage.from,
      text:newMessage.text,
      createdAt:new Date().getTime()
    });//emits the event to every connection
  });

  socket.on('disconnect',()=>{
    console.log('User is disconnected');
  });
});

server.listen(port,()=>{
  console.log(`server is up on port ${port}`);
});
