const server = require("./server.js");

//
const port = 3002;
server.listen(port, () => {
	console.log("server is running on port " + port);
});
