var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
    res.render('index', {title: 'Index'});
});
router.get('/courses', function (req, res) {
    res.render('courses', {title: 'Courses', index: 1});
});
router.get('/teachers', function (req, res) {
    res.render('teachers', {title: 'Teachers', index: 2});
});
// router.get('/schedule', function (req, res) {
//     res.render('schedule', {title: 'Schedule', index: 3});
// });
// router.get('/students', function (req, res) {
//     res.render('students', {title: 'Students', index: 4});
// });
router.get('/mode', function (req, res) {
    res.render('mode', {title: 'Modes', index: 3});
});
router.get('/reason', function (req, res) {
    res.render('reason', {title: 'Reason', index: 4});
});
router.get('/about', function (req, res) {
    res.render('about', {title: 'About', index: 5});
});


//video
router.get(/\/video\/([\d]{0,5})/, function (req, res) {
    var videoId = req.params[0];
    if (videoId <= 0) {
        res.send("lost video id");
        return;
    }
    var videoSrc = "video-" + videoId + ".mp4";
    console.log(videoSrc);
    res.render('video', {title: 'Video', index: 1, videoSrc: videoSrc});

});

module.exports = router;
