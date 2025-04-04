const express=require('express');
const {PORT} = require('./config'); // while importing from index.js , no need to explicitly write that
const apiRoutes= require('./routes')
const app=express();

app.use('/api', apiRoutes);

app.listen(PORT, ()=>{
    console.log(`Server started on PORT : ${PORT}`);
})

