import express, { Request, Response } from 'express';

const studentRouter = express.Router();

studentRouter.get('/', (req: Request, res: Response) => {
    console.log(req.params);
    res.send({ data: 'student data' });
});

studentRouter.get('/:id', (req: Request, res: Response) => {
    console.log(req.params);
    res.send(req.params);
});

module.exports = studentRouter;
