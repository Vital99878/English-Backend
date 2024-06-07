import Classroom from './classroom';
import Exercise from './exercise';

export default interface Student {
    id: number;
    name: string;
    grade: EnglishGrade;
    classes: Array<Classroom>;
    exercises: Exercise[];
}

type EnglishGrade =
    | 'Beginner'
    | 'Elementary'
    | 'Pre-Intermediate'
    | 'Intermediate'
    | 'Upper-Intermediate'
    | 'Advanced'
    | 'Proficiency';
