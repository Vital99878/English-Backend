import express from 'express';
import studentRoute from './routes/student';

import teacherRoute from './routes/teacher';

import { Response, Request } from 'express';
import chalk from 'chalk';
import AppDataSource from './app-data-source';
import User from './entity/user.entity';

const app = express();

const port = 3000;

const userRouter = express.Router();

userRouter.post('/', async (req: Request<User>, res: Response) => {
    try {
        const user = await AppDataSource.getRepository(User).create(req.body);
        const results = await AppDataSource.getRepository(User).save(user);
        res.send('OK').status(201);
    } catch (error) {
        console.log(chalk.bgBlack.red(error));
        res.send('Error').status(500);
        return res.send(error);
    }
});
userRouter.get('/:id', async (req: Request<{ id: string }>, res: Response) => {
    try {
        // @ts-ignore
        const user = await AppDataSource.getRepository(User).findBy({
            id: req.params.id,
        });
        res.send(user).status(200);
    } catch (error) {
        console.log(chalk.bgBlack.red(error));
        res.send('Error').status(500);
    }
});

userRouter.get('/', async (req: Request<{ id: string }>, res: Response) => {
    try {
        // @ts-ignore
        const users = await AppDataSource.getRepository(User).findBy();
        res.send(users).status(200);
    } catch (error) {
        console.log(chalk.bgBlack.red(error));
        res.send('Error').status(500);
    }
});

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
    res.send('Hello World');
});

app.use('/user', userRouter);
app.use('/student', studentRoute);

app.use('/teacher', teacherRoute);
// app.use('/exercise', exerciseRoute);

AppDataSource.initialize()
    .then(() => {
        console.log(chalk.bgCyan.green('Data Source has been initialized!'));
        // here you can start to work with your database
    })
    .catch((error) => console.log(chalk.bgCyan.red(error)));

app.listen(port, () => {
    console.log(chalk.bgBlack.green(`Example app listening on port ${port}`));
});
