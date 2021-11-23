
// zaciagniecie biblioteki express do stalej express
const express = require('express')

// wybranie portu
const port = 3000

// utworzenie obiektu app na podstawie biblioteki express
const app = express()

// zaciagniecie biblioteki hbs
app.set('view engine','hbs')


// utworzenie metody obslugujacej strony glownej
app.get('/', (req, res) => {
    res.render('index')         // dzieki metodzie render z biblioteki hbs mozemy podlinkowac plik zawierajacy html
})

// utworzenie metody obslugujacej dzialanie podstrony kontakt
app.get('/kontakt', (req, res) => {
    res.render('kontakt')
})

// uruchomienie  *nasluchiwanie  Serwera
app.listen(port)

