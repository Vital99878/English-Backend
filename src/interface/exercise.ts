/**
 * Упражение для правильной вставки пропущенных слов
 */
export default interface Exercise {
    type: ExerciseType;
    description: string;
    solution: string[];
    // проверить упражение
    isDone: boolean;
}

type ExerciseType =
    | 'Вставить пропущенное слово'
    | 'Составить предложение, используя слово'
    | 'Расставить в правильном порядке';
