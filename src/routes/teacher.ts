import express, { Request, Response } from 'express';

const teacherRouter = express.Router();

teacherRouter.get('/', (req: Request, res: Response) => {
    res.send({ data: 'teacher data' });
});

export default teacherRouter;
