const {Router} = require('express');
const rounter = Router();
const Course = require('../models/course');

rounter.get('/', (req, res) => {
    res.render('add-courses', {
        title: 'Add Courses',
        isAdd: true
    });
});

rounter.post('/', async (req, res) => {
    console.log(req.body);
    const course = new Course(req.body.title, req.body.price, req.body.img);

    await course.save();

    res.redirect('/courses');
});

module.exports = rounter;