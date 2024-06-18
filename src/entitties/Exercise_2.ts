import ExerciseI, { CreateExerciseDto } from 'src/interface/exercise';
import BaseExercise from 'src/entitties/BaseExercise';

export default class Exercise_2 extends BaseExercise {
    theme: ExerciseI['theme'];
    description: string;
    solutionKeys: string[];

    constructor(exerciseDto: CreateExerciseDto) {
        super(exerciseDto);

        this.theme = exerciseDto.theme;

        this.description = exerciseDto.description;

        this.solutionKeys = exerciseDto.description
            .match(/(\{.*?})|(\S+)/gm)
            ?.map((key) => {
                if (key.startsWith('{'))
                    return key.replace('{', '').replace('}', '');
                else return key;
            }) as string[];
    }

    /**
     * Проперка решения студента
     */
    checkSolution(solution: string[]): boolean {
        return this.solutionKeys.join(' ') === solution.join(' ');
    }
}
