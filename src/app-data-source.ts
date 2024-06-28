import { DataSource } from 'typeorm';

import User from './entity/user.entity';
import BaseExercise from './entity/exercise/BaseExercise';

const AppDataSource = new DataSource({
    type: 'postgres',
    host: '127.0.0.1',
    port: 5432,
    username: 'postgres',
    password: 'pass123',
    database: 'English',
    entities: [BaseExercise, User],
    logging: false,
    synchronize: true,
});

export default AppDataSource;
