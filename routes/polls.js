var express = require('express');
var router = express.Router();

var Poll = require('../models/Poll');
var Vote = require('../models/Vote');

router.post('/', function(req, res) {
    console.log(req.body);
    var poll = new Poll(req.body);
    poll.save(function(err) {
        if (err)
            res.status(500).send(err);
        else
            res.json(poll);
    });
});

router.get('/', function(req, res) {
    Poll.find(function(err, polls) {
        if (err)
            res.status(500).send(err);
        else
            res.json(polls);
    });
});

router.get('/open', function(req, res) {
    Poll.find(function(err, polls) {
        if (err) {
            res.status(500).send(err);
        } else {
            polls = polls.filter(function() {
                // Get polls that are un-expired and that the current user hasn't voted in
                return true;
            });
            res.json(polls);
        }
    });
});

router.get('/:id', function(req, res) {
    Poll.findById(req.params.id, function(err, poll) {
        if (err)
            res.status(500).send(err);
        else
            res.json(poll);
    });
});

router.put('/:id', function(req, res) {
    Poll.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true }, function(err, poll) {
        if (err)
            res.status(500).send(err);
        else
            res.json(poll);
    });
});

router.get('/:id/votes', function(req, res) {
    Vote.find({ poll: req.params.id }, function(err, votes) {
        if (err)
            res.status(500).send(err);
        else {
            res.send(votes)
        }
    })
})

module.exports = router;
