const express = require('express');
let router = express.Router();


router.use(function(req, res, next) {
    console.log(req.url, "@" ,Date.now());
    next()
});
router
.route('/cars')
.get((req,res) => {
    res.send('hii get/things/cars');
})
.post((req,res) => {
    res.send('hii post/things/cars');
})

router
.route
('/cars/:carid')
.get((req,res) => {
    res.send('hii get /things/cars/' + req.params.carid);
})
.put( (req,res) => {
    res.send('hii put /things/cars/' + req.params.carid)
})

module.exports = router;