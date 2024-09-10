const express = require('express');
const path = require('path');
const app = express();

// Set the view engine to be ejs
app.set('view engine', 'ejs');

// Set the views folder
app.set('views', './views');

// Set the (static) public folder
app.use(express.static(path.join(__dirname, 'public')));

// Listen for / and render index page
app.get('/', (req, res) => {
    res.render('index');
});

app.get('/about', (req, res) => {
    res.render('about');
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