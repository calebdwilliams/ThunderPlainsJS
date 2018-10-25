const express = require('express');
const compression = require('compression');
const port = process.env.PORT || 8888;
const app = express();

app.use('/ThunderPlainsJS', express.static('./docs'));
app.use(compression());
app.use((request, res, next) => {
    console.log(`${request.method}: \t ${request.url}`);
    next();
});

app.listen(port);
