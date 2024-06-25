import { DataSource } from 'typeorm';
import BaseExercise from './entity/exercise/BaseExercise';
import Exercise_1 from './entity/exercise/Exercise_1';

const AppDataSource = new DataSource({
    type: 'postgres',
    host: '127.0.0.1',
    port: 5432,
    username: 'postgres',
    password: 'pass123',
    database: 'English',
    entities: [BaseExercise, Exercise_1],
    logging: false,
    synchronize: true,
});

export default AppDataSource;
