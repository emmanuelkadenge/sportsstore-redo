const coach = []
exports.addCoachController = (req, res, next) => {
    res.render('add-coach',{pageTitle: 'please add coach',path : '/add-coach'})
}
exports.viewCoachController = (req, res, next) => {
    coach.push({name : req.body.name,
        age: req.body.age,
        ethnicity : req.body.ethnicity,
        height : req.body.height,
        weight: req.body.weight,
        description : req.body.description
    })
    const coachh = coach
    res.render('view-coach',{pageTitle: 'please view coach',path : '/view-coach',cocha : coachh})
}