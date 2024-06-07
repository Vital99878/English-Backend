import express, { Request, Response } from 'express';

const studentRouter = express.Router();

studentRouter.get('/', (req: Request, res: Response) => {
    res.send({ data: 'student data' });
});

module.exports = studentRouter;
