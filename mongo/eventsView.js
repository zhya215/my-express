module.exports = function(app) {
	app.get('/view/event/:event_id', function(req, res) {
		var events = app.db.get('events')
		var q = {
            'id' : req.params.event_id
        }
        var oneEvent=events.findOne(q, function(err, item){
        	console.log("##################")
        	console.log(item)
        	res.render('eventsView.jade', {
        		oneEvent: item
        	})
        })
	})
}