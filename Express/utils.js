const users = [
    {
        username: 'user1',
        password: '12345'
    },
    {
        username: 'user2',
        password: '12345'
    },
    {
        username: 'user3',
        password: '12345'
    },
    {
        username: 'user4',
        password: '12345'
    }
]


const checkUser = (req, res, next) => {
    console.log(req.body); //recieved from client
    const isUserValid = users.find(el => {
        return el.username === req.body.username
    })
    console.log(isUserValid); //validated user from user list

    if(isUserValid){
        // do something ---> check the password
        // if pasword matched
        // send the response
        next()
    } else{
        res.send('User is invalid')
    }
    ///validate the user ---> checks
    console.log('from middleware');
}

// const checkPassword = (req, res, next) => {
//     console.log(req.body ); //recieved from client
//     const isUserValid = users.find(el => {
//         return el.username === req.body.username
//     })
//     console.log(isUserValid); //validated user from user list

//     if(isUserValid){
//         // do something ---> check the password
//         // if pasword matched
//         // send the response
//         next()
//     } else{
//         res.send('User is invalid')
//     }
//     ///validate the user ---> checks
//     console.log('from middleware');
// }

module.exports = {checkUser}
// module.exports = checkUser