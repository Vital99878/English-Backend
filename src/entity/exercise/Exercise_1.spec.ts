import { expect } from '@jest/globals';
import { CreateExerciseDto } from 'src/interface/exercise';
import Exercise_1 from 'src/entity/exercise/Exercise_1';

const descriptionDto =
    "When is _{key} your birthday? Му birthday is on the_{key} first of Мау. Do you remember _{key} your mother's birthday? Нis book is recognized bу а_{key} lot of people.";

const exerciseDto: CreateExerciseDto = {
    type: 'Вставить пропущенное слово',
    theme: { articles: '' },
    description: descriptionDto,
};

const correctSolutionKeys = ['', 'the', '', 'а'];
const incorrectSolutionKeys = ['', '', '', 'а'];

const exercise = new Exercise_1(exerciseDto);

describe('Создание корректого инстанса класса Exercise с типом упраженения "Вставить пропущенное слово"', () => {
    it('должен создать экземпляр класса Exercise с корректными ключами для проверки', () => {
        expect(exercise.solutionKeys).toEqual(correctSolutionKeys);
    });

    it('должен создать экземпляр класса Exercise корректным текстом выполенного упражнения', () => {
        expect(exercise.description).toEqual(exerciseDto.description);
    });

    it('для ExerciseType "Вставить пропущенное слово"', () => {
        expect(exercise.checkSolution(correctSolutionKeys)).toEqual(true);
        expect(exercise.checkSolution(incorrectSolutionKeys)).toEqual(false);
    });
});