let http = require('http');
let fileSys = require('fs');
let url = require('url');

let server = http.createServer((req, res) => {
    let q = url.parse(req.url, true)
    let path = q.query
    let fileLocation;
    switch (path.menu) {
        case '/':
            fileLocation = 'pages/index.html'
            break
        case 'home':
            fileLocation = 'pages/index.html'
            break
        case 'about':
            fileLocation = 'pages/about.html'
            break
        default:
            fileLocation = 'pages/index.html'
    }
    fileSys.readFile(fileLocation, (err, data) => {
        if (err) {
            res.writeHead(404, {'Content-Type': 'text/html'})
            return res.end('404 Not Found')
        }
        res.writeHead(200, {'Content-Type': 'text/html'})
        res.write(data)
        return res.end()
    })
})

server.listen(8000);
