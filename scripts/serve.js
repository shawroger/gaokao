const st = require("st");
const http = require("http");
const path = require("path");
const port = require("../package.json")?.config?.port ?? 5000;

const config = st({
	path: path.resolve(__dirname, ".."),
});

const server = http.createServer(config).listen(port);
console.log("server is running at: http://localhost:" + port);
