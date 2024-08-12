const express = require('express');
const path = require('path');
const app = express();

// set the views folder
app.set('views', path.join(__dirname, 'views'));

// set the view engine to be ejs
app.set('view engine', 'ejs');

// set the (static) public folder
app.use(express.static(path.join(__dirname, 'public')));

// listen for / and render index page
app.get('/', (req, res) => {
    res.render('index');
})

// listen on port 3000
app.listen(3000, () => {
    console.log('Server is running on port 3000, http://localhost:3000');
});