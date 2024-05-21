const http = require('http');
const fs = require('fs');
const url = require('url');
const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'laravel_20232'
})

connection.connect(function (err){
    if (err) throw err;
    connection.query("SELECT * FROM table_name", function(err, result, fields){
        if (err) throw err;
        console.log(result);
        connetction.end();
    });
});

let server = http.createServer((req, res) => {
    let q = url.parse(req.url, true);
    let pathname = q.pathname;
    let fileLocation;

    if (pathname === '/') {
        fileLocation = 'public/pages/login/index.html';
    } else if (pathname.startsWith('/css') || pathname.startsWith('/js')) {
        fileLocation = 'public' + pathname;
    } else {
        switch (qcd) {
            case 'dashboard':
                fileLocation = 'public/pages/dashboard.html';
                break;
            case 'login':
                fileLocation = 'public/pages/login/index.html';
                break;
            case 'kk':
                fileLocation = 'public/pages/kk/index.html';
                break;
            case 'create-kk':
                fileLocation = 'public/pages/kk/create-kk.html';
                break;
            case 'penduduk':
                fileLocation = 'public/pages/penduduk/index.html';
                break;
            case 'create-penduduk':
                fileLocation = 'public/pages/penduduk/create-penduduk.html';
                break;
            default:
                fileLocation = 'public/pages/dashboard.html';
        }
    }

    fs.readFile(fileLocation, (err, data) => {
        if (err) {
            res.writeHead(404, {'Content-Type': 'text/html'});
            return res.end('404 Not Found');
        }
        if (pathname.endsWith('.css')) {
            res.writeHead(200, {'Content-Type': 'text/css'});
        } else if (pathname.endsWith('.js')) {
            res.writeHead(200, {'Content-Type': 'application/javascript'});
        } else {
            res.writeHead(200, {'Content-Type': 'text/html'});
        }
        res.write(data);
        return res.end();
    });
});

server.listen(8000, () => {
    console.log('Server http://localhost:8000 running');
});
