import Exercise, { CreateExerciseDto } from 'src/interface/exercise';
import Exercise_1 from '../entity/exercise/Exercise_1';
import exerciseService from '../service/exercise-servise';

const descriptionDto =
    "When is _{key} your birthday? Му birthday is on the_{key} first of Мау. Do you remember _{key} your mother's birthday? Нis book is recognized bу а_{key} lot of people.";

const exerciseDto: CreateExerciseDto = {
    type: 'Вставить пропущенное слово',
    theme: { articles: 'first data' },
    description: descriptionDto,
    solutionKeys: [],
};

const exercise: Exercise = new Exercise_1(exerciseDto);

class ExerciseController {
    constructor() {}

    async getAll() {
        return await exerciseService.getAll();
    }

    async get(id: number) {
        return exerciseService.get(id);
    }
    async create(dto: CreateExerciseDto) {
        return exerciseService.create(dto);
    }
    remove(id: number) {
        return exerciseService.remove(id);
    }
    update(id: number, exerciseDto: Partial<CreateExerciseDto>) {
        return exerciseService.update(id, exerciseDto);
    }
}
const exerciseController = new ExerciseController();
export default exerciseController;
