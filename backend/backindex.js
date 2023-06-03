const connectToMongo = require('./db');
connectToMongo();
//  const qrcode = require('qrcode-terminal');
//  const { Client } = require('whatsapp-web.js');
//    const client = new Client();

// client.on('qr', qr => {
//     qrcode.generate(qr, {small: true});
// });

// client.on('ready', () => {
//     console.log('Client is ready!');
// });

// client.initialize();

 
const express = require('express');
// const cookieParser = require('cookie-parser');
// app = server 
const app = express();
const cors = require("cors");
app.use(cors());

app.post("/createuser",async(req,res)=>{
  let user=new User(req.body)
  let result=await user.save()
  res.send(result)
})
app.post("/Filluplearners",async(req,res)=>{
  let user=new User(req.body)
  let result=await user.save()
  res.send(result)
})

app.use(express.json());
// app.use(cookieParser());
const port = 5000
// Available routes
app.use('/api/auth',require('./routes/auth'));
// app.use('/api/blog',require('./routes/blogroute'));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
// asynchronous nature  of javascript is awesomee...
// module.exports=router;