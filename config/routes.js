/*
 * Define the application's routes.
 */

var express = require('express');

module.exports = function(app) {
    var poll = require('../routes/poll');
    app.post('/api/launch', poll.launch);
}
