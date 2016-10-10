/**
 * Created by zhaojunlike on 2016/7/2.
 * Author：@zhaojunlike
 * GitHub：https://github.com/zhaojunlike
 * Email: 1716771371@qq.com
 */

var express = require('express');
var path = require('path');
var favicon = require('static-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
/*post数据获取模块*/
var bodyParser = require('body-parser');
var routes = require('./routes/index');
var users = require('./routes/users');

var app = express();

// 模板引擎安装
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(favicon(path.join(__dirname, 'public/images/favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.use(cookieParser());

/*静态服务*/
app.use(express.static(path.join(__dirname, 'public')));

/*用户菜单*/
app.locals.nav = [
    {name: 'Index', url: '/'},
    {name: 'Courses', url: '/courses'},
    {name: 'Teachers', url: '/teachers'},
    // {name: 'Schedule', url: '/schedule'},
    //{name: 'Students', url: '/students'},
    {name: 'Mode', url: '/mode'},
    {name: 'Reason', url: '/reason'},
    {name: 'About', url: '/about'},
];

app.use('/', routes);
app.use('/users', users);

/// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    //next(err);
    res.send("404 Not Found");
});

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function (err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


module.exports = app;
