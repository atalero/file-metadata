var express = require('express');
var multer  = require('multer');
var upload = multer({ dest: 'uploads/' });
var app = express();
var bodyParser = require('body-parser');
app.use(express.static('public'));
app.use(bodyParser.json());

app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

app.post("/upload", upload.single('doc') ,function (request, response) {
 return response.send({bytes: request.file.size});
});

var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
