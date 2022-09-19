console.log('This is my script file');

const login = (e) => {
    e.preventDefault()
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((res) => {
        return res.json()
    })
    .then((data) => {
        console.log(data);
    })
}



// abpout.jsx

// <>Thsii si about page</>