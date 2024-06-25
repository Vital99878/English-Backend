import express from 'express';
import studentRoute from './routes/student';
import exerciseRoute from './routes/exercise';
import teacherRoute from './routes/teacher';

import { Response, Request } from 'express';
import chalk from 'chalk';
import AppDataSource from './app-data-source';

const app = express();

const port = 3000;

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
    res.send('Hello World');
});

app.use('/student', studentRoute);

app.use('/teacher', teacherRoute);
app.use('/exercise', exerciseRoute);

AppDataSource.initialize()
    .then(() => {
        console.log(chalk.bgCyan.green('Data Source has been initialized!'));
        // here you can start to work with your database
    })
    .catch((error) => console.log(error));

app.listen(port, () => {
    console.log(chalk.bgBlack.green(`Example app listening on port ${port}`));
});
