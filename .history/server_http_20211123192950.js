const http =  require('http')               // zapisanie do stalej http biblioteki http

const port = 3000                           // stala zawierajaca numer/adress portu



const handler = (Request, Response) =>  {
    console.log('New user')
    Response.end('Hello Node')
}

const server = http.createServer(handler)


server.listen(port, () => {
    console.log('server is running')
})