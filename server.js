const http = require("http");

const server = http.createServer((req, res) => {
    res.writeHead(200, {"Content-Type": "text/plain"});
    res.end("Bot is running!");
});

const keep = () => {
    server.listen(3000, () => {
        console.log("Server is ready!");
    });
};

module.exports = keep;
