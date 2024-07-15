const express = require('express');
const loggerMiddleware = require('./loggerMiddleware');

const app = express();

// Use the logger middleware
app.use(loggerMiddleware);

app.get('/', (req, res) => {
    res.send('Hello World!');
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
//sdad
