import * as express from 'express'
import * as path from 'path'

const app = express()

app.set('view engine', 'ejs')
app.set('views', './views')

app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
  res.render('main')
})
app.get('/projects', (req, res) => {
  res.render('projects')
})
app.get('/contacts', (req, res) => {
  res.render('contacts')
})
app.use('/', (req, res) => {
  res.render('404')
})

export const start = () => {
  app.listen(3000, () => console.log(`server start on 3000`))
}
