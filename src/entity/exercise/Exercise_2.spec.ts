import { expect } from '@jest/globals';
import Exercise from 'src/entity/exercise/Exercise_2';
import { CreateExerciseDto } from 'src/interface/exercise';

const exerciseDto: CreateExerciseDto = {
    type: 'Расставить в правильном порядке',
    theme: { articles: '' },
    description: 'Му birthday is on the first of Мау',
};

const exerciseDto__SPLITER__AND__CURVYBRACES: CreateExerciseDto = {
    type: 'Расставить в правильном порядке',
    theme: { articles: '' },
    description: 'Му birthday is {on the} first {of Мау}',
};

const correctSolution: Exercise['solutionKeys'] = [
    'Му',
    'birthday',
    'is',
    'on',
    'the',
    'first',
    'of',
    'Мау',
];

const incorrectSolution: Exercise['solutionKeys'] = [
    'Му',
    'is',
    'birthday',
    'on',
    'first',
    'the',
    'Мау',
];

describe('Создание корректого инстанса класса Exercise с типом упраженения "Расставить в правильном порядке"', () => {
    it('checkSolution для ExerciseType "Расставить в правильном порядке работает корректно", разделитель Пробел', () => {
        const exercise: Exercise = new Exercise(exerciseDto);

        expect(exercise.checkSolution(correctSolution)).toEqual(true);
        expect(exercise.checkSolution(incorrectSolution)).toEqual(false);
    });

    it('checkSolution для ExerciseType "Расставить в правильном порядке работает корректно", разделитель Пробел и {фраза}', () => {
        const exercise: Exercise = new Exercise(
            exerciseDto__SPLITER__AND__CURVYBRACES
        );

        expect(
            exercise.checkSolution([
                'Му',
                'birthday',
                'is',
                'on',
                'the',
                'first',
                'of',
                'Мау',
            ])
        ).toEqual(true);

        expect(
            exercise.checkSolution([
                'Му',
                'is',
                'birthday',
                'on',
                'first',
                'the',
                'Мау',
            ])
        ).toEqual(false);
    });
});
