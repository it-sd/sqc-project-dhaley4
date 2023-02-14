const express = require('express')
const app = express()
const PORT = process.env.PORT || 5163

app.listen(PORT, () => console.log(`Listening on ${PORT}`))
app.get('/health', function (req, res) {
  app.render('/health')
})
app.get('/', function (req, res) {
  app.render('/')
})