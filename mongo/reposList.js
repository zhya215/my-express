module.exports = function(app) {
	app.get('/list/repos', function(req, res) {
        var repos = app.db.get('repos')

        repos.find({}, function(err, repos) {
        	console.log("xxxx")
            console.log(repos)
            res.render('reposList.jade', {

                repos: repos
            })
        })

	})
}