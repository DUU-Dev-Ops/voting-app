$.get('/api/polls/' + pollId, function(poll) {
    $.get('/api/polls/' + pollId + '/votes', function(votes) {
        var pollAdmin = new Vue({
            el: "#poll-results",
            data: {
                poll: poll,
                votes: votes,
            },
            methods: {}
        });
    });
});
