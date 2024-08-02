const app = require("./server.js");
const port = 3030;

// const https = require("https");
// const fs = require("fs");
//
// var privateKey = fs.readFileSync(
// "/etc/letsencrypt/live/atakan.cloud/privkey.pem"
// );
// var certificate = fs.readFileSync(
// "/etc/letsencrypt/live/atakan.cloud/fullchain.pem"
// );
//
// https
// .createServer(
// {
// key: privateKey,
// cert: certificate,
// },
// app
// )
// .listen(port, () => {
// console.log(`Server is running on https://atakan.cloud:${port}/`);
// });

app.listen(port, () => {
  console.log(`Server is running on http://atakan.cloud:${port}/`);
});
