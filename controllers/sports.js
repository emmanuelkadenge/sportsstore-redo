const sport = []
exports.addSportsController = (req, res, next) => {
    res.render('add-sport',{
        pageTitle : 'please add sport',
        path : '/add-sport'
    })
}

exports.viewSportsController = (req, res, next) => {
    sport.push({
        sportName: req.body.sportName,
        sportID : req.body.sportID,
        sportDescription : req.body.sportDescription
    })
    const sportt = sport
    res.render('view-sport',{
        pageTitle : 'please add sport',
        spot : sportt,
        path : '/view-sport'
    })
}