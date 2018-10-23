const express = require('express');
const compression = require('compression');
const port = process.env.PORT || 8050;
const app = express();

app.use(express.static('./slides'));
app.use(compression());
app.use((request, res, next) => {
    console.log(`${request.method}: \t ${request.url}`);
    next();
});

app.listen(port);