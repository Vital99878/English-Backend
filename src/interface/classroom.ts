import Student from './student';
import Teacher from './teacher';

export default interface Classroom {
    name: string;
    students: Array<Student>;
    teacher: Teacher;
    // добавить в класс
}
