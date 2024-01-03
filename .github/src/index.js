const app = require('../../.github/src/server.js')
const port = 3030

app.listen(port, () => {
 console.log(`Server is running on http://localhost:${port}/`)
})
