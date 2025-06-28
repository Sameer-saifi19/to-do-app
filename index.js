const express = require('express');
const todoModel = require('./db');
const app = express();

app.use(express.json)
app.use(cors())

app.post('/create-task', async function (req, res) {

    const { title, description, date, done } = req.body;

    try {
        await todoModel.create({
            title,
            description,
            date,
            done
        })
    } catch (error) {
        console.log("Error !...Cannot create task", Error)
        res.json({
            message: "Error while creating task"
        })
    }

})

app.listen(3000)