const express = require('express');
const myapp = express();
const cors = require("cors");


myapp.use(express.json());
myapp.use(cors())

const user = require('./routes/sign')
myapp.use('/api',user)

const news = require('./routes/news')
myapp.use('/api', news)

const port = 9000;
myapp.listen(port,()=>{
     console.log(`Server running on port ${port}`)
});
