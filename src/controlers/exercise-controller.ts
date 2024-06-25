import Exercise, { CreateExerciseDto } from 'src/interface/exercise';
import Exercise_1 from '../entity/exercise/Exercise_1';
import AppDataSource from '../app-data-source';

const descriptionDto =
    "When is _{key} your birthday? Му birthday is on the_{key} first of Мау. Do you remember _{key} your mother's birthday? Нis book is recognized bу а_{key} lot of people.";

const exerciseDto: CreateExerciseDto = {
    type: 'Вставить пропущенное слово',
    theme: { articles: 'first data' },
    description: descriptionDto,
};

const exercise: Exercise = new Exercise_1(exerciseDto);

class ExerciseController {
    constructor() {}

    get(id: string): Exercise {
        return exercise;
    }
    async create(dto: CreateExerciseDto) {
        await AppDataSource.manager.save(exercise);
        console.log('Exercise has been saved. Exercise id is', exercise.id);
        return exercise;
    }
    remove(id: string): Exercise {
        return exercise;
    }
    update(id: string): Exercise {
        return exercise;
    }
}
const exerciseController = new ExerciseController();
export default exerciseController;
