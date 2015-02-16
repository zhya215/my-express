module.exports = function(app) {
	app.get('/view/repo/:repo_id', function(req, res) {
		var repos = app.db.get('repos')
		var q = {
            'id' : Number(req.params.repo_id)
        }
        console.log(Number(req.params.repo_id))
        var oneRepo=repos.findOne(q, function(err, item){
        	console.log("##################")
        	console.log(item)
        	res.render('reposView.jade', {
        		oneRepo: item
        	})
        })
	})
}