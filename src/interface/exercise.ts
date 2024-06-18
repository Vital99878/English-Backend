/**
 * Упражение для правильной вставки пропущенных слов
 */
export default interface Exercise {
    type: ExerciseType;
    theme: ExerciseTheme;
    description: string;
    /**
     * Ключи для проверки решения
     */
    solutionKeys: string[];
    /**
     * Упраженение выполнено?
     */
    checkSolution(solution: string[]): boolean;
}

export type CreateExerciseDto = Pick<
    Exercise,
    'type' | 'theme' | 'description'
>;

export type ExerciseType =
    | 'Вставить пропущенное слово'
    | 'Составить предложение, используя слово'
    | 'Расставить в правильном порядке';

/**
 * Тема упражнения или топик
 */
type ExerciseTheme = {
    articles?: string;
    time?: string;
};
