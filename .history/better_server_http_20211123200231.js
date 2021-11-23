
// zaciagniecie biblioteki express do stalej express
const express = require('express')

// wybranie portu
const port = 3000

// utworzenie obiektu app na podstawie biblioteki express
const app = express()

// Alternatywny zapis funkcji .get
//app.get('/',function (request, response) {
//})

// utworzenie metody obslugujacej strony glownej
app.get('/', (req, res) => {
    res.send('hello node')
})

// utworzenie metody obslugujacej dzialanie podstrony kontakt
app.get('/kontakt', (req, res) => {
    res.send('Dane kontaktowe')
})

// uruchomienie  *nasluchiwanie  Serwera
app.listen(port)

