const {Router} = require('express');
const rounter = Router();

const Course = require('../models/course');

rounter.get('/', async (req, res) => {
    const courses = await Course.getAll();

    res.render('courses', {
        title: 'Courses',
        isCourses: true,
        courses
    });
});

rounter.get('/:id', async (req, res) => {
    const course = await Course.getById(req.params.id);

    res.render('course', {
        title: `Course ${course.title}`,
        course
    });
});

module.exports = rounter;