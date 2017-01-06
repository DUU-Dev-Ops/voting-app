var express = require('express');
var router = express.Router();

var Poll = require('../models/Poll');
var Vote = require('../models/Vote');

router.post('/', function(req, res) {
    var vote = new Vote(req.body);
    vote.save(function(err) {
        if (err)
            res.status(500).send(err);
        else
            res.json(vote);
    });
});

router.get('/', function(req, res) {
    Vote.find(function(err, votes) {
        if (err)
            res.status(500).send(err);
        else
            res.json(votes);
    });
});

router.get('/:id', function(req, res) {
    Vote.findById(req.params.id, function(err, vote) {
        if (err)
            res.status(500).send(err);
        else
            res.json(vote);
    });
});

router.put('/:id', function(req, res) {
    Vote.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true }, function(err, vote) {
        if (err)
            res.status(500).send(err);
        else
            res.json(vote);
    });
});

module.exports = router;
