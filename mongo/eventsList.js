module.exports = function(app) {
	app.get('/list/events', function(req, res) {
        var events = app.db.get('events')

        events.find({}, function(err, events) {
            res.render('eventsList.jade', {

                events: events
            })
        })

	})
}