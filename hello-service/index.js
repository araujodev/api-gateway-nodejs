const express = require('express');
const app = express();

app.get('/hello', (req, res) => {
    res.json({
        msg: "Hello from hello-service"
    });
});

app.listen(3001, () => {
    console.log("Hello Service has been started at: http://localhost:3001");
})