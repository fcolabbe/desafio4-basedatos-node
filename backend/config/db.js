import pg from 'pg';

const {Pool} = pg

/* const user      = config.env.USER
const password  = config.env.PASSWORD
const database  = config.env.DATABASE
const port      = config.env.PORTDB
const host      = config.env.HOST
const allowExitOnIdle = config.env.ALLOWEXITONIDLE 


const config = {
    user: user,
    host: host,
    database: database,
    password: password,
    port: port,
    allowExitOnIdle: allowExitOnIdle
}
 */

const config = {
    user: 'fcolabbe',
    host: 'localhost',
    database: 'likeme',
    password: '',
    port: 5432,
    allowExitOnIdle: true
}
const pool = new Pool(config);

export default pool;

try {
    await pool.query('SELECT NOW()');
    console.log('Connected to the PostgreSQL database.');
} catch (error){
    console.error('Error connecting to the database', error.stack);
} 