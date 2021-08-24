const team = []

exports.addTeamController = (req, res, next) => {
    res.render('add-team',{
        pageTitle : 'please add the team',
        path : '/add-team'
    })
}

exports.viewTeamController = (req, res, next) => {
    team.push({
        name : req.body.name,
        gender : req.body.gender,
        captainRegNo : req.body.captainRegNo,
        coachID : req.body.coachID,
        teamID : req.body.teamID,
        sportID : req.body.sportID
    })
    const teammm = team
    res.render('view-team',{
        pageTitle : 'View Teams Here',
        path : '/view-players',
        teamm : teammm
    })
}