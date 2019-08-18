const express = require('express');
const app = new express();
const router = express.Router()
const users = [{
    id: '123',
    name: 'james'
}, {
    id: '456',
    name: 'jack'
}, {
    id: '789',
    name: 'robin'
}];

app.use(function (req, res, next) {
    res.setHeader('Content-Type', 'text/plain;charset=utf-8');
    // CORS 解决跨域问题
    res.setHeader('Access-Control-Allow-Origin', "*");
    res.setHeader("Access-Control-Allow-Methods", "POST, GET, OPTIONS, DELETE");
    res.setHeader("Access-Control-Allow-Credentials", "true");
    next();
});

router.get('/', (req, res) => {
    res.send('hello express');
})

router.get('/api/users', (req, res) => {
    res.json(users);
});

router.get('*', function (req, res) {
    res.end("404 not found");
    // res.sendfile('./public/404.html');
});

app.use('/', router);

app.listen(3000, () => {
    console.log('Your app server is listening at on 3000 port');
});