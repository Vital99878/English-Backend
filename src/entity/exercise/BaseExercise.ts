import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

import Exercise, {
    CreateExerciseDto,
    ExerciseType,
} from 'src/interface/exercise';

@Entity()
export default abstract class BaseExercise implements Exercise {
    @PrimaryGeneratedColumn()
    id: number = 0;
    @Column()
    type: ExerciseType;
    @Column()
    theme: Exercise['theme'] = { articles: '' };
    @Column()
    description: string = '';
    @Column()
    solutionKeys: string[] = [];

    protected constructor(exerciseDto: CreateExerciseDto) {
        this.type = exerciseDto.type;
    }

    checkSolution(solution: string[]): boolean {
        throw new Error('Method not implemented.');
    }
}
