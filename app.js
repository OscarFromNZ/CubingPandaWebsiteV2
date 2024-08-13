const express = require('express');
const path = require('path');
const app = express();

// set the view engine to be ejs
app.set('view engine', 'ejs');

// set the views folder
app.set('views', './views');

// set the (static) public folder
app.use(express.static(path.join(__dirname, 'public')));

// listen for / and render index page
app.get('/', (req, res) => {
    res.render('index');
})

// listen on port 8080
app.listen(8080, () => {
    console.log('Server is running on port 8080, http://localhost:8080');
});