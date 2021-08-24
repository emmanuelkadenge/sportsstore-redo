const game = []

exports.addGameController = (req, res, next) => {
    res.render('add-game',{
        pageTitle : 'please add game',
        path: '/add-game'})
}

exports.viewGameController = (req, res, next) => {
    game.push({
        id : req.body.id,
        gameTime : req.body.gameTime,
        venue : req.body.venue,
        duration : req.body.duration,
        matchDetails : req.body.matchDetails
    })
    const gamme = game
    res.render('view-game',{
        pageTitle : 'please view games',
        gam : gamme,
        path : '/view-game'
    })
}