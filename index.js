const express = require('express')
const app = express()

app.post('/', function(req, res) {
    setTimeout(() => {
        console.log("RECV: ", req.query)
        res.send('Hello World!');
    }, 5000);
});

app.listen(3344, () => console.log('Example app listening on port 3000!'))
