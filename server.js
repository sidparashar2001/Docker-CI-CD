const express = require('express');
const bodyParser = require('body-parser');
const app = express();

bodyParser.urlencoded({ extended: true });
app.use(bodyParser.json());

const port = 8000;

app.get("/",(req,res) => {
    res.send("Hello from the other side!!!!");
})

app.get("/custom", (req,res) => {
    res.send("Inside the /custom route");
    res.json({"route":"custom"});
})

app.post("/senddata", (req,res) => {
    const data = req.body;
    console.log("Logging the request body\n", data);
    res.send("POST request has been successfully sent");
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});