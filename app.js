var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var favicon = require('serve-favicon');
var session = require('express-session');

var articleController = require('./server/controller/ArticleController');
var labelController = require('./server/controller/LabelController');
var pageRouter = require('./server/controller/PageRouter');

var app = express();
//__dirname 是工程的绝对路径：比如f:\workspace\webstormworkspace\blog
//应用视图层目录
app.set('views', path.join(__dirname, 'app'));
//应用模板引擎
app.set('view engine', 'html');
app.engine('html', require('ejs').renderFile);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use("/images",express.static(path.join(__dirname, 'app/images')));
//默认node去寻找app下的index.html，作为app入口页面
app.use("/app",express.static(path.join(__dirname, 'app')));
app.use(favicon(__dirname + '/favicon.ico'));

//首页
app.get('/', function(req, res, next) {
  res.render('index',{title: 'title'});
});

app.use('/article', articleController);
app.use('/label', labelController);
app.use('/category', pageRouter);

var http = require('http');
var port = normalizePort(process.env.PORT || '80');
app.set('port', port);
var server = http.createServer(app);

server.listen(port);
server.on('error', onError);
server.on('listening', onListening);

function normalizePort(val) {
  var port = parseInt(val, 10);
  if (isNaN(port)) {
    return val;
  }
  if (port >= 0) {
    return port;
  }
  return false;
}

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  var bind = typeof port === 'string'
      ? 'Pipe ' + port
      : 'Port ' + port;

  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

function onListening() {
  var addr = server.address();
  var bind = typeof addr === 'string'
      ? 'pipe ' + addr
      : 'port ' + addr.port;
}
