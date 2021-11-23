const express = require('express')
const port = 3000


const app = express()

// Alternatywny zapis funkcji .get
//app.get('/',function (request, response) {
//})

// utworzenie metody obslugujacej prace serwera
app.get('/', (req, res) => {
    res.send('hello node')
})

// uruchomienie  *nasluchiwanie  Serwera
app.listen(port)

