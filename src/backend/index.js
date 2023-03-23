const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

require('../controllers/authController')(app);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
    }
);