const path = require('path');


const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(express.static(`${__dirname}/public`));
app.get('/*', function(req,res) {
        res.sendFile(path.join(__dirname+'/public/index.html'));
    }
);
    

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}!`)
});

module.exports = app;