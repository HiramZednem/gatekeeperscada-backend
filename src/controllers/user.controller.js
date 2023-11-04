import { conn } from "../db.js"
// Correo, nombre, contrasena
// Registrar
export const createUser = async (req,res) => {
    const { email, password } = req.body
    const username = "user"
    console.log(req.body)
    const [rows] = await conn.query("INSERT INTO user (username, email, password) VALUES (?,?,?)",[username,email,password])
    console.log(rows)
    res.json(rows[0])
}

// Login
export const login = async (req, res) => {
    const { email, password } = req.body
    const [rows] = await conn.query("SELECT * FROM user WHERE email = ? AND password = ?",[email,password])
    
    if (rows.length > 0) {
        res.json(true)
    } else {
        res.json(false)
    }
}