import { Repository } from 'typeorm';
import { CreateExerciseDto } from 'src/interface/exercise';
import BaseExercise from '../entity/exercise/BaseExercise';
import AppDataSource from '../app-data-source';

class ExerciseService {
    constructor(private exerciseRepository: Repository<BaseExercise>) {}

    async getAll() {
        try {
            return this.exerciseRepository.find();
        } catch (error) {
            console.error(error);
        }
    }

    async get(id: number) {
        try {
            return this.exerciseRepository.findOneBy({ id });
        } catch (error) {
            console.error(error);
        }
    }

    async create(exercise: CreateExerciseDto) {
        try {
            return this.exerciseRepository.save(exercise);
        } catch (error) {
            console.error(error);
        }
    }

    async update(id: number, exerciseDto: Partial<CreateExerciseDto>) {
        const exercise = await this.exerciseRepository.preload({
            id: +id,
            ...exerciseDto,
        });

        if (!exercise) {
            throw new Error(`Нет упражнения данным id:${id}`);
        }
        return this.exerciseRepository.save(exercise);
    }

    async remove(id: number) {
        try {
            return this.exerciseRepository.delete(id);
        } catch (error) {
            console.error(error);
        }
    }

    async verifySolution(
        id: number,
        solution: CreateExerciseDto['solutionKeys']
    ): Promise<boolean | Error> {
        try {
            const exercise = await this.exerciseRepository.findOneBy({ id });
            if (exercise) {
                // todo  проверка решения и вызов student/{{studentId}}/done-exercises{{exerciseID}}
                // todo Solution Verification class
                return exercise.solutionKeys === solution;
            } else {
                return new Error('Нету упражнения');
            }
        } catch (error) {
            // todo ts Error
            console.error(error);
            return new Error('Нету упражнения');
        }
    }
}

const exerciseService = new ExerciseService(
    AppDataSource.getRepository(BaseExercise)
);
export default exerciseService;
