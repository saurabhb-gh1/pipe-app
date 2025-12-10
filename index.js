const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Hello, pipeline.... test pipeline route !!!');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
