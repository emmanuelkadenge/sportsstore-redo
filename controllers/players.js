const players = []

exports.addPlayerController = (req, res, next) => {
    res.render('add-player',{pageTitle: 'please add player', path: '/add-player'})
}

exports.viewPlayerController = (req, res, next) => {
    players.push({
        name : req.body.name,
        age:req.body.age,
        ethnicity : req.body.ethnicity,
        height : req.body.height,
        weight : req.body.weight,
        description : req.body.description
    })
    const player = players
    res.render('view-player',{pageTitle : 'please view players',path: '/view-player',play : player})
}