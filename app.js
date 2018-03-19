const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))




app.use(express.static("public"));

app.get('/', (req, res) => {
    res.render("index.html")
})

var PORT = process.env.port || 8080;
app.listen(PORT, () => {
    console.log(`App listening on ${PORT}`);
    console.log('Press Ctrl+C to quit.')
})