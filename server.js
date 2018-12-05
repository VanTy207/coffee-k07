const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(__dirname + '/dist/coffee'));

app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname+'/dist/coffee/index.html'));
});
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server started in port: ${PORT}`);
});