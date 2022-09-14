const { json } = require('express');
const express = require('express');
const app = express();

// middleware will see later
app.use(express.json());

const todos = [
    {
        id: 1,
        name: 'Task 1',
        done: true
    },
    {
        name: 'Task 2',
        done: false
    },
    {
        name: 'Task 3',
        done: true
    },
    {
        name: 'Task 4',
        done: false
    }
]

app.get('/todos', (req, res) => {
    console.log(todos);
    res.json(todos);
})
.post('/addTodo', (req, res) => {
    // console.log(todos);
    todos.push(req.body)
    res.json(todos);
    
    // store the data
    // perform validation 
    // then add the data 
    // and then send the data
})
.patch('/updateTodos', (req, res) => {
    console.log(req.body);
    todos[2] = req.body
    // get the updated data
    // find the todo to be updated from the array ---> find, findIndex, filter, slice
    // res.json(updatedtodos)
})



const port = 5500
app.listen(port, (err) => {
    if(err) console.log(err);
    console.log(`server started on ${port}`);
})