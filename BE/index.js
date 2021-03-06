import express from "express";
import db from "./config/database.js";
import productRoutes from "./routes/index.js";
import cors from 'cors';

const app = express();

try {
    await db.authenticate();
    console.log('Database Tersambung');
} catch (error) {
    console.error('Gagal Tersambung Karena: ', error);
}

app.use(cors());
app.use(express.json());
app.use('/product', productRoutes);

app.listen(5000, () => console.log('server running at port 5000'));