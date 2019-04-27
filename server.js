const http = require("http");

const st = require("st");

http.createServer(
    st({
        path: __dirname + '/public',
        index: 'index.html',
        cache: false
    })
).listen(3000, () => {
    console.log("iniciando en 3000");
});

