const express = require('express');
const cors = require('cors')
const todoModel = require('./db');
const { default: mongoose } = require('mongoose');
const app = express();

app.use(express.json())
app.use(cors())

app.post('/create-task', async function (req, res) {

    const { title, description, date, done } = req.body;
    try {
        await todoModel.create({
            title: title,
            description: description,
            date: date,
            done: done
        })

        res.json({
            message: "task created"
        })
    } catch (error) {
        console.log("Error !...Cannot create task", Error)
        res.json({
            message: "Error while creating task"
        })
    }

})


app.get('/get-todos',async (req, res) =>{
    try {
        const allTodos = await todoModel.find()

        if(allTodos.length === 0){
            res.json({
                Message: "no task found"
            })
        }
        
        res.status(201).json({
            allTodos
        })
    } catch (error) {
        res.json({
            message: "error fetching docs"
        })
    }
})

async function connection(){
    mongoose.connect("mongodb+srv://user1:CSA123@cluster0.e4e43lo.mongodb.net/todo-app")
    app.listen(3000)
    console.log("app is listening at 3000")
}

connection()