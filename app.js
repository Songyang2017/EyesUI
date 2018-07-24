var express = require('express');

var app = express();


app.get('/api', function(req, res){
    res.json('');
})

app.listen(8083, function(){
    console.log('12')
})