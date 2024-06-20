import express, { Request, Response } from 'express';
import { CreateExerciseDto } from 'src/interface/exercise';
import chalk from 'chalk';
import exerciseController from '../controlers/exercise-controller';

const exerciseRouter = express.Router();

// Exercise routes - GET, POST, DELETE

exerciseRouter.get(
    '/:exerciseId',
    async (req: Request<{ exerciseId: string }>, res: Response) => {
        const exercise = exerciseController.get(req.params.exerciseId);
        console.log(
            chalk.bgBlack.green(`Got exercise:  ${req.params.exerciseId}`)
        );
        res.send(exercise);
    }
);

exerciseRouter.post(
    '/create',
    async (
        req: Request<undefined, undefined, CreateExerciseDto>,
        res: Response
    ) => {
        const exercise = exerciseController.create(req.body);
        console.log(chalk.bgRed.green('exercise created: ', exercise.type));
        res.send('OKK');
    }
);
exerciseRouter.delete(
    '/delete/:exerciseId',
    async (
        req: Request<{ exerciseId: string }, undefined, CreateExerciseDto>,
        res: Response
    ) => {
        const exercise = exerciseController.remove(req.params.exerciseId);
        // console.log('exercise deleted:  ', exercise);
        console.log(
            '%c exercise deleted! ',
            'background: #222; color: #bada55'
        );
        res.send('OK');
    }
);

export default exerciseRouter;
