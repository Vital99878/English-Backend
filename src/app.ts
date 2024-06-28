import express from 'express';
import studentRoute from './routes/student';

import teacherRoute from './routes/teacher';

import exerciseRouter from './routes/exercise';

import { Response, Request } from 'express';
import chalk from 'chalk';
import AppDataSource from './app-data-source';

const app = express();

const port = 3000;

// todo Запретить пушить в дев и мастер ветки. Только ПР
// todo Валидатор входящих данных перед запросом в БД
// todo Обработка ответа, когда пришел пустой ответ из БД

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
    res.send('Hello World');
});

app.use('/student', studentRoute);
app.use('/teacher', teacherRoute);
app.use('/exercise', exerciseRouter);

AppDataSource.initialize()
    .then(() => {
        console.log(chalk.bgCyan.green('Data Source has been initialized!'));
        // here you can start to work with your database
    })
    .catch((error) => console.log(chalk.bgCyan.red(error)));

app.listen(port, () => {
    console.log(chalk.bgBlack.green(`Example app listening on port ${port}`));
});
