const express = require('express');
const router = express.Router();
const fs = require("fs");
const app = express();
const http = require('http').Server(app);
const path = require('path')
const root = path.join(__dirname,'data')
const port = process.env.PORT || 5000;
const cors = require('cors');

fs.readdir(root,(err,files)=>{
  files.forEach(file => {
    const data = JSON.parse(fs.readFileSync(root+'/' + file,'utf8'))
    router.get("/"+file,(req,res,next) => {
      res.json(data)
    })
  })
})
app.use(cors())
app.use('/api',router)
http.listen(port, () => {
  console.log(`FreeWheelin Server Running at http://localhost:${port}/`);
});