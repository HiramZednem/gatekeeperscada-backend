import express from "express";
import cors from "cors";
import userRoutes from './routes/user.routes.js'

const app = express();

app.use(express.json())
app.use(cors());
app.get('/hola', (req, res) => res.send('hhola'));
app.use('/api',userRoutes);

app.listen(3000);
console.log(`listening on port 3000`);