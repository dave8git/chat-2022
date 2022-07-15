const express = require('express');
const path = require('path');
const app = express();

const messages = [];
app.use(express.static(path.join(__dirname, '/client')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/client/index.html'));
});
 
const port = 8000;
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
const io = socket(server);

