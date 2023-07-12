const http = require('http')
const data = require('./utils/data');

http.createServer((req, res) => {
    res.setHeader('Access-control-Allow-origin', '*');

    if(req.url.includes("/rickandmorty/character")) {
        const id = req.url.split('/').at(-1)
        const result = data.find(pj => pj.id === Number(id));
        res.writeHead(200, {'Content-type': 'application/json'})
        res.end(JSON.stringify(result));
    }
}).listen(3001, 'localhost');