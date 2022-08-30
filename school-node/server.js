

const morgan = require('morgan');
const express = require('express');
const database = require('./database');
const database2 = require('./database2');
const PORT = 5000;
const app = express();

app.use(morgan('dev'));
// app.use(express.json());
// app.use(express.urlencoded({extended : true}));


app.get('/', (req , res) =>{
    res.send('What are you doing here!');
});
app.get('/students', async (req , res) =>{
    const students = await database.select().from('students');
    res.json(students)


});


app.get('/teachers', async (req , res) =>{
    const teachers = await database2.select().from('teachers');
    res.json(teachers)


});

app.listen(PORT, ()=> console.log(`Server is up at port ${PORT}`));