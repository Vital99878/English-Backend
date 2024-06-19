import express, { Request, Response } from 'express';
import { CreateExerciseDto } from 'src/interface/exercise';
import chalk from 'chalk';

const exerciseController = require('../controlers/exercise-controller');

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
        console.log('exercise created: ', exercise);

        res.send('OK');
    }
);
exerciseRouter.delete(
    '/delete/:exerciseId',
    async (
        req: Request<{ exerciseId: string }, undefined, CreateExerciseDto>,
        res: Response
    ) => {
        const exercise = exerciseController.remove(req.body);
        // console.log('exercise deleted:  ', exercise);
        console.log(
            '%c exercise deleted! ',
            'background: #222; color: #bada55'
        );
        res.send('OK');
    }
);

module.exports = exerciseRouter;
