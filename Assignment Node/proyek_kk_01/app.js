const http = require('http');
const fs = require('fs');
const url = require('url');

let server = http.createServer((req, res) => {
    let q = url.parse(req.url, true)
    let path = q.query
    let fileLocation;
    switch (path.menu) {
        case '/':
            fileLocation = 'public/pages/dashboard.html'
            break
        case 'dashboard':
            fileLocation = 'public/pages/dashboard.html'
            break
        case 'kk':
            fileLocation = 'public/pages/kk/index.html'
            break
        case 'penduduk':
            fileLocation = 'public/pages/penduduk/index.html'
            break
        default:
            fileLocation = 'public/pages/dashboard.html'
    }

    fs.readFile(fileLocation, (err, data) => {
        if (err) {
            res.writeHead(404, {'Content-Type': 'text/html'})
            return res.end('404 Not Found')
        }
        res.writeHead(200, {'Content-Type': 'text/html'})
        res.write(data)
        return res.end()
    })

})

server.listen(8000)