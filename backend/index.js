import express from 'express';
import dotenv from 'dotenv';
import router from './routes/route.js';
import cors from 'cors';

dotenv.config();
const app = express();

const PORT = process.env.PORT || 4000;

//midelworld
app.use(express.json());
app.use(cors());

//routes 
app.use("/",router)


app.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`);
});