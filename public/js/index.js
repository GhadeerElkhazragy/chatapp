var socket=  io(); //create connection
socket.on('connect',()=>{
  console.log('connected to server');
  
  socket.emit('createMessage',{
    from: 'blablabla@blablabla.com',
    text:'ok'
  });
});
socket.on('disconnect',()=>{
  console.log('Diconnected');
});


socket.on('newMessage',(message)=>{
  console.log('New Message',message);
});
