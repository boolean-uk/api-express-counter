const app = require('./server.js')
const PORT = 3030


app.listen(PORT,  () => {
    console.log('server is running on the macjine now on port', PORT)
})