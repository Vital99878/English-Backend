import ExerciseI, { CreateExerciseDto } from 'src/interface/exercise';
import { exhaustiveCheck } from 'src/types/utils';
export default class Exercise implements ExerciseI {
    type: ExerciseI['type'];
    theme: ExerciseI['theme'];
    description: string;
    solution: string[];
    solutionKeys: string[];
    isDone: boolean;

    constructor(exerciseDto: CreateExerciseDto) {
        this.type = exerciseDto.type;
        this.theme = exerciseDto.theme;
        this.solution = [];
        this.isDone = false;

        this.description = exerciseDto.description
            .split(' ')
            .map((word) => {
                if (word.endsWith('__KEY')) {
                    return word.substring(0, word.length - ' __KEY'.length);
                }
                return word;
            })
            .join('');

        switch (exerciseDto.type) {
            case 'Вставить пропущенное слово':
                const regex = /\s*.*?__KEY/g;
                this.solutionKeys = exerciseDto.description.match(
                    regex
                ) as string[];
                break;

            case 'Расставить в правильном порядке':
                this.solutionKeys = this.description.split('');
                break;

            case 'Составить предложение, используя слово':
                this.solutionKeys = [];
                break;

            default:
                exhaustiveCheck(exerciseDto.type);
        }
    }

    /**
     * Проперка решения студента
     */
    checkSolution(solution: string[]): boolean {
        this.isDone = true;
        switch (this.type) {
            case 'Вставить пропущенное слово':
                return this.solutionKeys.join('') === solution.join(' ');

            case 'Расставить в правильном порядке':
                return this.description === solution.join(' ');

            // Д.з без автопроверки. Проверяется учителем вручную или в классе.
            case 'Составить предложение, используя слово':
                return true;

            default:
                exhaustiveCheck(this.type);
        }
    }
}
