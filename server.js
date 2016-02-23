var express = require('express');
var request = require("request");
var app = express();

app.get('/:playlistId/:apiKey', function (req, res) {
    request({ 
        uri: "https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId="+req.params.playlistId+"&key="+req.params.apiKey,
        method: "GET"
    }, function(error, response, body) {
        res.json(body);
    });
});

app.listen(3000, function () {
  console.log('Running on port 3000. Use: /playlistId/apiKey');
});
