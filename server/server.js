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

// Define the path to the client's built files (client/dist)
const clientDistPath = path.join(__dirname, '..', 'client', 'dist');

// --------- DEFINE APP USES ---------
app.use(cors());
app.use(express.json());

// --- direct server to use the compiled build files from React ---
app.use(express.static(clientDistPath));

// Define your API routes
app.get("/:splat*", (req, res) => {
    // --- verify that all routes are given index.html to allow React to manage routing ---
    res.sendFile(path.join(clientDistPath, 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Welcome to Nia's Weather App.`);
    console.log(`Server running on port ${PORT}`);
})