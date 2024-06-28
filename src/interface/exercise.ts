/**
 * Упражение для правильной вставки пропущенных слов
 */
export default interface Exercise {
    id: number;
    type: ExerciseType;
    theme: ExerciseTheme;
    description: string;
    /**
     * Ключи для проверки решения
     */
    solutionKeys: string[];
}

export type CreateExerciseDto = Omit<Exercise, 'id'>;

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
