const express = require('express')
const cors = require('cors')
const app = express();

app.use(express.json)
app.use(cors())

app.post('/create-task', function(req,res){
    const { title , description } = req.body;
    
})