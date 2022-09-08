const http = require('http');

const reqDetails = {
    method: 'GET',
    host: 'localhost',
    port: 8000,
    path: '/req'
}

http.request(reqDetails, (res) => {
    console.log('response recieved');
    res.on('data', (data) => {
        console.log(data+'');
    })
})
.end()

http.get(reqDetails, (res) => {
    console.log('response recieved');
    res.on('data', (data) => {
        console.log(data+'');
    })
})




/*
// http://localhost:8000/req
axios.get('htps://sfvdfvd')
.then(() => {

})

// fetch('http://localhost:8000/req').
then((res) => {
    res.json()
})
.then((data) => {
    console.log(data);
})
*/
