require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');
const port = 3500;

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});