import express from 'express';
import studentRoute from './routes/student';
import exerciseRoute from './routes/exercise';
import teacherRoute from './routes/teacher';

import { Response, Request } from 'express';
import chalk from 'chalk';

const app = express();

const port = 3000;

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
    res.send('Hello World');
});

app.use('/student', studentRoute);

app.use('/teacher', teacherRoute);
app.use('/exercise', exerciseRoute);

app.listen(port, () => {
    console.log(chalk.bgBlack.green(`Example app listening on port ${port}`));
});
