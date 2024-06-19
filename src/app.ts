import express from 'express';
const studentRoute = require('./routes/student');
const teacherRoute = require('./routes/teacher');
const exerciseRoute = require('./routes/exercise');

import { Response, Request } from 'express';

const app = express();

const port = 3000;

app.get('/', (req: Request, res: Response) => {
    res.send('Hello World');
});

app.use('/student', studentRoute);

app.use('/teacher', teacherRoute);
app.use('/exercise', exerciseRoute);

app.listen(port, () => {
    console.log('Hello World');
    console.log(`Example app listening on port ${port}`);
});
