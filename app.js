const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const db = require('./utils/database');
const adminRoutes = require('./routes/admin');


(async () => {
    await db.sequelize.sync();
    // Code here
  })();


app.use(bodyParser.json({extended: false}));

app.use(adminRoutes);

app.use((req, res, next) => {
    res.status(404).send('<h1>Page not found</h1>');
});

app.listen(3000);