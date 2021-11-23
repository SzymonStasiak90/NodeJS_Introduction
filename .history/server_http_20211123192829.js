const http =  require('http')

const port = 3000



const handler = (Request, Response) =>  {
    console.log('New user')
    Response.end('Hello Node')
}

const server = http.createServer(handler)


server.listen(port, () => {
    console.log('server is running')
})