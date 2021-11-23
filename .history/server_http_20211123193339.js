const http =  require('http')               // zapisanie do stalej http biblioteki http

const port = 3000                           // stala zawierajaca numer/adress portu



const handler = (Request, Response) =>  {   // zmienna handler zostanie wywolana po urchmieniu serwera
    console.log('New user')
    Response.end('Hello Node')
}

const server = http.createServer(handler)   // utwprzenie serwera     const nazwa =http.createserver(wywolanie metody obslugujacej dzialanie serera)


server.listen(port, () => {
    console.log('server is running')
})