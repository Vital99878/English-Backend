import ExerciseI, { CreateExerciseDto } from 'src/interface/exercise';
import BaseExercise from './BaseExercise';
import { Entity, Column } from 'typeorm';

// @Entity()
class Exercise_1 extends BaseExercise {
    @Column()
    theme: ExerciseI['theme'];
    @Column()
    description: string;
    @Column()
    solutionKeys: string[];

    constructor(exerciseDto: CreateExerciseDto) {
        super();
        const keyMarker = '_{key}';
        this.theme = exerciseDto.theme;

        this.description = exerciseDto.description;

        const regex = new RegExp(
            `(\\b\\s${keyMarker})|(\\s\\S+${keyMarker})`,
            'gmi'
        );
        this.solutionKeys = exerciseDto.description
            .match(regex)
            ?.map((word) =>
                word.substring(1, word.length - keyMarker.length)
            ) as string[];
    }

    /**
     * Проперка решения студента
     */
    checkSolution(solution: string[]): boolean {
        return this.solutionKeys.join('') === solution.join('');
    }
}
export default Exercise_1;
