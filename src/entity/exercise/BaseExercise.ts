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
    @Column('simple-json')
    theme: Exercise['theme'] = { articles: '' };
    @Column()
    description: string = '';
    @Column({ type: 'text' })
    solutionKeys: string[] = [];

    protected constructor(exerciseDto: CreateExerciseDto) {
        this.type = exerciseDto.type;
    }

    checkSolution(solution: string[]): boolean {
        throw new Error('Method not implemented.');
    }
}
