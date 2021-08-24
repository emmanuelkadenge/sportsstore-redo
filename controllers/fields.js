const fields = []

exports.addFieldController = (req, res, next) => {
    res.render('add-field',{pageTitle : 'please add Field', path: '/add-field'})
}

exports.viewFieldController = (req, res, next) => {
    fields.push({
        name: req.body.name,
        id : req.body.id,
        grassPattern : req.body.grassPattern,
        size : req.body.size,
        description : req.body.description
    })
    const fieldd = fields
    res.render('view-field',{pageTitle : 'please add field',fiel : fieldd, path: '/view-field'})
}