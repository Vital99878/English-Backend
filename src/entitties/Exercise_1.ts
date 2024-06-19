import ExerciseI, { CreateExerciseDto } from 'src/interface/exercise';
const BaseExercise = require('../entitties/BaseExercise');

class Exercise_1 extends BaseExercise {
    theme: ExerciseI['theme'];
    description: string;
    solutionKeys: string[];

    constructor(exerciseDto: CreateExerciseDto) {
        super(exerciseDto);
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
module.exports = Exercise_1;
