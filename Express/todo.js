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

const products = [
    {
        id: 1,
        name: 'product 1',
        done: true
    },
    {
        id: 2,
        name: 'product 2',
        done: false
    },
    {
        id: 3,
        name: 'product 3',
        done: true
    },
    {
        id: 4,
        name: 'product 4',
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

app.get('/product/:id', (req, res) => {
    console.log(req.params);
    const productId = req.params.id
    const product = products.find((el) => {
        return el.id === +productId
    })
    console.log(product);
    // res.send('product');
    res.json(product)
})


// http://localhost:5500/products?productName=product1

// http status codes
// 100 series ---> information
// 200 series ---> success response ---> 200, 201, 202, 204
// 300 series ---> redirection ---> 301, 307
// 400 series ---> client errors --> 400, 401, 404, 403
// 500 series ---> server error ----> 500, 502, 503, 504

// res.status()

const port = 5500
app.listen(port, (err) => {
    if(err) console.log(err);
    console.log(`server started on ${port}`);
})