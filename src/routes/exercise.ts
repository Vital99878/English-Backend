import express, { Request, Response } from 'express';
import { CreateExerciseDto } from 'src/interface/exercise';
import chalk from 'chalk';
import exerciseController from '../controlers/exercise-controller';

const exerciseRouter = express.Router();

exerciseRouter.get('/', async (req: Request, res: Response) => {
    const exercises = await exerciseController.getAll();
    res.send(exercises);
});

exerciseRouter.post(
    '/create',
    async (
        req: Request<undefined, undefined, CreateExerciseDto>,
        res: Response
    ) => {
        const exercise = await exerciseController.create(req.body);
        exercise &&
            console.log(
                chalk.bgRed.green(
                    'exercise created: ',
                    JSON.stringify(exercise)
                )
            );
        res.send('OKK');
    }
);
exerciseRouter.get(
    '/:exerciseId',
    async (req: Request<{ exerciseId: string }>, res: Response) => {
        const exercise = await exerciseController.get(+req.params.exerciseId);
        console.log(
            chalk.bgBlack.green(
                `Got exercise:  ${JSON.stringify(exercise?.id)}`
            )
        );
        // res.send(JSON.stringify(exercise));
        res.send(exercise);
    }
);

exerciseRouter.patch(
    '/:exerciseId',
    async (
        req: Request<{ exerciseId: string }, Partial<CreateExerciseDto>>,
        res: Response
    ) => {
        const exercise = await exerciseController.update(
            +req.params.exerciseId,
            req.body
        );
        console.log(
            chalk.bgBlack.green(
                `Exercise  ${JSON.stringify(exercise?.id)} updated`
            )
        );
        // res.send(JSON.stringify(exercise));
        res.send(exercise);
    }
);
exerciseRouter.delete(
    '/:exerciseId',
    async (
        req: Request<{ exerciseId: string }, undefined, CreateExerciseDto>,
        res: Response
    ) => {
        const exercise = await exerciseController.remove(
            +req.params.exerciseId
        );

        res.send(exercise);
    }
);

export default exerciseRouter;
