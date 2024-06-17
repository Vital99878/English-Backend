import { expect } from '@jest/globals';
import Exercise from './Exercise';
import { CreateExerciseDto } from 'src/interface/exercise';

describe('Создание корректого инстанса класса Exercise с типом упраженения Вставить пропущенное слово', () => {
    const descriptionDto =
        "When is _{key} your birthday? Му birthday is on the_{key} first of Мау. Do you remember _{key} your mother's birthday? Нis book is recognized bу а_{key} lot of people.";

    const description =
        "When is  your birthday? Му birthday is on the first of Мау. Do you remember  your mother's birthday? Нis book is recognized bу а lot of people.";

    const exerciseDto: CreateExerciseDto = {
        type: 'Вставить пропущенное слово',
        theme: { articles: '' },
        description: descriptionDto,
    };

    const correctSolutionKeys = ['', 'the', '', 'а'];
    const incorrectSolutionKeys = ['', '', '', 'а'];

    const exercise: Exercise = new Exercise(exerciseDto);

    it('должен создать экземпляр класса Exercise с корректными ключами для проверки', () => {
        expect(exercise.solutionKeys).toEqual(correctSolutionKeys);
    });

    it('должен создать экземпляр класса Exercise корректным текстом выполенного упражнения', () => {
        expect(exercise.description).toEqual(description);
    });

    it('для ExerciseType Вставить пропущенное слово', () => {
        expect(exercise.checkSolution(correctSolutionKeys)).toEqual(true);
        expect(exercise.checkSolution(incorrectSolutionKeys)).toEqual(false);
    });
});

describe('Создание корректого инстанса класса Exercise с типом упраженения Расставить в правильном порядке', () => {
    const descriptionDto = 'Му birthday is on the first of Мау';

    const exerciseDto: CreateExerciseDto = {
        type: 'Расставить в правильном порядке',
        theme: { articles: '' },
        description: descriptionDto,
    };

    it('checkSolution для ExerciseType Расставить в правильном порядке работает корректно', () => {
        const exercise: Exercise = new Exercise(exerciseDto);

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
