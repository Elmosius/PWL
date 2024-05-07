let http = require('http');
let url = require('url');
let browserUrl = 'http://it.maranatha.edu/main?userId=256&lang=en'

let server = http.createServer((req, res) => {
    let browserDetail = url.parse(browserUrl);
    console.info(browserUrl)
    console.info(browserDetail.host)
    console.info(browserDetail.pathname)
    console.info(browserDetail.search)
    return res.end()
})
server.listen(8000);
