var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Duke Voting' });
});

router.get('/poll_admin', function(req, res, next) {
    res.render('poll_admin', { title: 'Poll Admin' });
})

router.get('/poll_admin/:poll_id', function(req, res, next) {
    res.render('poll_results', { title: 'Poll Results', poll_id: req.params.poll_id })
});

module.exports = router;
