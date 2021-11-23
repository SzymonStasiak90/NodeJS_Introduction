
// pobranie bibliotek / powiazan z plikami

const http =  require('http')               // zapisanie do stalej http biblioteki http

// utworzenie stalej zawierajacej adresacje portu

const port = 3000                           // stala zawierajaca numer/adress portu


// utworzenie metody obslugujacej dzialanie serwra

const handler = (Request, Response) =>  {   // zmienna handler zostanie wywolana po urchmieniu serwera
    console.log('New user')
    Response.end('Hello Node')
}


// utworzenie obiektu/serwera

const server = http.createServer(handler)   // utwprzenie serwera     const nazwa =http.createserver(wywolanie metody obslugujacej dzialanie serera)

// wywolanie metody listen

server.listen(port, (err) => {                 // wywolanie metody listen z obiektu server    nazwa_obiektu/serwera.listen(wybrany_port, () => {wywolanie wybranego dzialania/metody})
    if(err)
    {
        return console.log('something goes wrong')
    }
    console.log('server is running')
})