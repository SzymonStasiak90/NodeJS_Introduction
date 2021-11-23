const express = require('express')
const port = 3000


const app = express()

// Alternatywny zapis funkcji .get
//app.get('/',function (request, response) {
//})

app.get('/', (req, res) => {
    res.send('hello node')
})

app.listen(port)

