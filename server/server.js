import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';


// --------- DEFINE VARIABLES ---------
const app = express();
const PORT = process.env.PORT || 3444;

// --- define the path to the index.html file in the build folder ---
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// --------- DEFINE APP USES ---------
app.use(cors());
app.use(express.json());

// --- direct server to use the compiled build files from React ---
app.use(express.static(path.join(__dirname, '../client/dist')));

// Define your API routes
app.get("*", (req, res) => {
    // --- verify that all routes are given index.html to allow React to manage routing ---
    res.sendFile(path.join(__dirname, '../client/dist', 'index.html'));

    console.log('Welcome to Nia\'s Weather App.');
});

app.listen(PORT, () => {
    console.log(`Weather App is running on ${process.env.DOMAIN}`)
})