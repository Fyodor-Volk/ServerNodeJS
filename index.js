const http = require('http');
let server = http.createServer((req, res) =>{
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' })
    res.end('<iframe frameborder="0" style="border:none;width:100%;height:180px;" width="100%" height="180" src="https://music.yandex.ru/iframe/#track/90464681/17882989">Слушайте <a href="https://music.yandex.ru/album/17882989/track/90464681">Endless Love</a> — <a href="https://music.yandex.ru/artist/8887635">DVRST</a> на Яндекс Музыке</iframe>')

})
const PORT = 4000;
const HOST = 'localhost';

server.listen(PORT, HOST,()=>{
    console.log(`Сервер запущен: http://${HOST}:${PORT}`)
});
