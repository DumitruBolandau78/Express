const {Router} = require('express');
const rounter = Router();

rounter.get('/', (req, res) => {
    res.render('index', {
        title: 'Home',
        isHome: true
    });
});

module.exports = rounter;