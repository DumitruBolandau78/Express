const express = require('express');
const handleBars = require('express-handlebars');
const homeRoutes = require('./routes/home');
const coursesRoutes = require('./routes/courses');
const addCoursesRoutes = require('./routes/add-courses');

const hbs = handleBars.create({
    defaultLayout: 'main',
    extname: 'hbs'
});

const app = express();
app.use(express.static('public'));

app.use(express.urlencoded({extended: true}));

app.use('/', homeRoutes);
app.use('/courses', coursesRoutes);
app.use('/add-courses', addCoursesRoutes);

app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views views');



const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log('The server is running...');
});