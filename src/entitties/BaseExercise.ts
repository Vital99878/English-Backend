import Exercise, {
    CreateExerciseDto,
    ExerciseType,
} from 'src/interface/exercise';

abstract class BaseExercise implements Exercise {
    type: ExerciseType;
    theme: Exercise['theme'] = { articles: '' };
    description: string = '';
    solutionKeys: string[] = [];

    public constructor(exerciseDto: CreateExerciseDto) {
        this.type = exerciseDto.type;
    }

    checkSolution(solution: string[]): boolean {
        throw new Error('Method not implemented.');
    }
}
module.exports = BaseExercise;
