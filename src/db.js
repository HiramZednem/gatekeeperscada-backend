import { createPool } from "mysql2/promise";

export const conn = createPool({
    host: 'localhost',
    user: 'hiram',
    password: 'adminadmin',
    port: 3306,
    database: 'login'
})
