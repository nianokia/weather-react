import express from 'express';
import cors from 'cors';
import 'dotenv/config';

// --------- DEFINE VARIABLES ---------
const app = express();
const PORT = process.env.PORT || 3444;

// --------- DEFINE APP USES ---------
app.use(cors());
app.use(express.json());

// Define your API routes
app.get('/api/message', (req, res) => {
    res.json({ message: 'Hello from Express!' });
});

app.listen(PORT, () => {
    console.log(`Weather App is running on ${process.env.DOMAIN}`)
})