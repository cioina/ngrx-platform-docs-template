var express = require('express'),
    app = express();
    
Object.assign = require('object-assign');

app.engine('html', require('ejs').renderFile);
app.use(express.static(__dirname + '/static'));

var port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080,
    ip = process.env.IP || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0';

app.get('/', function (req, res) {
    res.render('index.html');
});

//The 404 Route (ALWAYS Keep this as the last route)
app.get('*', function (req, res) {
    res.render('404.html');
});

// error handling
app.use(function(err, req, res, next){
  console.error(err.stack);
  res.status(500).send('Something bad happened!');
});

app.listen(port, ip);
console.log('Server running on http://%s:%s', ip, port);

module.exports = app ;
