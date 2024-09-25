const express = require('express');
const path = require('path');
const app = express();

// Set the view engine to be ejs
app.set('view engine', 'ejs');

// Set the views folder
app.set('views', './views');

// Set the (static) public folder
app.use(express.static(path.join(__dirname, 'public')));

function getBlobs(number) {
    let blobs = [];

    for (let i = 0; i < number; i++) {
        let randomTop = Math.floor(Math.random() *1000);
        let randomLeft = Math.floor(Math.random() * 1500);
        blobs.push({ top: randomTop, left: randomLeft });
    }

    return blobs
}

app.get('/', (req, res) => {
    res.render('index', { blobs: getBlobs(10) });
});

app.get('/about', (req, res) => {
    res.render('about', { blobs: getBlobs(10) });
});

app.get('/collaborate', (req, res) => {
    res.render('collaborate', { blobs: getBlobs(10) });
});

app.get('/login', (req, res) => {
    res.render('login', { blobs: getBlobs(10) });
});

let port = 8080;

// Listen on the port specified
app.listen(port, () => {
    console.log(`Server is running on port ${port}, ${resolveURLFromPort(port)}`);
});

// this is stupid but who cares
function resolveURLFromPort(port) {
    return `http://localhost:${port}`;
}