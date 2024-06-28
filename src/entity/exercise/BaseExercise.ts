import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

import Exercise, {
    CreateExerciseDto,
    ExerciseType,
} from 'src/interface/exercise';

@Entity()
export default abstract class BaseExercise implements Exercise {
    @PrimaryGeneratedColumn()
    id: number = 0;
    @Column('string')
    type!: ExerciseType;
    @Column('simple-json')
    theme: Exercise['theme'] = { articles: '' };
    @Column()
    description!: string;
    @Column('simple-array')
    solutionKeys: string[] = [];
}
