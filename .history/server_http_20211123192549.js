const http =  require('http')

const port = 3000



const handler (Request, Response) =>  {
    console.log('New user')
}

const server = http.createServer()




server.listen(port, () => {
    console.log('server is running')
})