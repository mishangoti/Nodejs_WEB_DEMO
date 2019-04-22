var express = require('express');
var router = express.Router();
var Pusher = require('pusher');
var pusher = new Pusher({
    appId: '734524',
    key: '03b07b23d464bd625ac5',
    secret: 'bd86027ff9523829e6bb',
    cluster: 'ap2',
    encrypted: true
  });
  
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('index.ejs');
});


router.post('/', function(req, res, next){

    let os = req.body.os;
    // pusher.trigger('pusher app', 'you have just voted', {
    //     points : os
    // });
    // return res.json({
    //     success : true,
    //     message : 'thank you for vote'
    // });
    let message = {
        success : true,
        message : 'thank you fo voting'
    };
    console.log(message);
    // res.send(os);
});

module.exports = router;
