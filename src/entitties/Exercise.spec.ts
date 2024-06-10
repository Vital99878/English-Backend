import { expect } from '@jest/globals';
import Exercise from './Exercise';
import { CreateExerciseDto } from 'src/interface/exercise';

describe('Exercise Class', () => {
    beforeEach(() => {});

    it('should create an instance of Exercise with correct solution Keys', () => {
        const exerciseDto: CreateExerciseDto = {
            type: 'Вставить пропущенное слово',
            theme: { articles: '' },
            description:
                'Hello a__Key World. The__Key Lorem__Key ipsum dolor sit amet, consec__Key tetur adipiscing elit, sed',
        };

        const solutionKeys = ['a', 'The', 'Lorem', 'consec'];

        const exercise: Exercise = new Exercise(exerciseDto);

        expect(exercise.solutionKeys).toEqual(solutionKeys);
    });

    it('should call the doSomething method', () => {});

    it('should return a value after calling doSomething', () => {});
});
