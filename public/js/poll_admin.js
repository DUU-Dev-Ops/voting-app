var blankPoll = {
    name: '',
    expiry: new Date(),
    candidates: [
        { name: '', url: '' }
    ]
}

$.get('/api/polls', function(polls) {
    var pollAdmin = new Vue({
        el: "#poll-admin",
        data: {
            newPoll: $.extend(true, {}, blankPoll),
            polls: polls.reverse()
        },
        methods: {
            addCandidate: function(event) {
                this.newPoll.candidates.push({ name: '', url: '' });
            },
            createPoll: function(event) {
                var ctx = this;
                $.ajax({
                    method: 'POST',
                    url: '/api/polls',
                    data: this.newPoll,
                    error: function(jqXHR, error) {
                        alert("Poll creation failed -- Please make sure to fill in all the info for your poll.")
                    },
                    success: function(poll) {
                        poll.new = true;
                        ctx.polls.unshift(poll);
                        ctx.newPoll = $.extend(true, {}, blankPoll);
                    }
                });
            }
        }
    });
});
