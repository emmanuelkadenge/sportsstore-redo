const path = require('path');
const express = require('express');

const bodyParser = require('body-parser');
const app = express();

const playersRouter = require('./routes/player')
const coachesRouter = require('./routes/coach')
const fieldsRouter = require('./routes/fields')
const gamesRouter = require('./routes/games')
const sportsRouter = require('./routes/sport')
const teamsRouter = require('./routes/team')

app.set('view engine','ejs')
app.set('views','views')

app.use(express.static(path.join(__dirname,'public')))
app.use(bodyParser.urlencoded({extended : false}))

app.use(playersRouter)
app.use(coachesRouter)
app.use(fieldsRouter)
app.use(gamesRouter)
app.use(sportsRouter)
app.use(teamsRouter)

app.use((req, res, next) => {
    res.status(404).render('404',{pageTitle : '404 Nginx',path: ''})
})

app.listen(4000)