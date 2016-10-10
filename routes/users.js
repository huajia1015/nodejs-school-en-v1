var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res) {

    //用户的路由
    res.send('respond with a resource');
});

module.exports = router;
