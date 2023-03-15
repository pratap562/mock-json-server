const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()
const cors = require('cors')

server.use(middlewares)
server.use(router);
server.use(cors)

const port = process.env.PORT || 8080
server.listen(port, () => {
    console.log('JSON Server is running')
})
