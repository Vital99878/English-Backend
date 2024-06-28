import { Repository } from 'typeorm';
import { CreateExerciseDto } from 'src/interface/exercise';
import BaseExercise from 'src/entity/exercise/BaseExercise';
import AppDataSource from '../app-data-source';

class ExerciseService {
    constructor(private exerciseRepository: Repository<BaseExercise>) {}

    async get(id: number) {
        try {
            return this.exerciseRepository.findOne({ where: { id } });
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
}

const exerciseService = new ExerciseService(
    AppDataSource.getRepository(BaseExercise)
);
export default exerciseService;
