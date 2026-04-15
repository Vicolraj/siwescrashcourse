import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();

// Serve static files from dist/public (React build output)
const publicPath = path.join(__dirname, '..', 'dist', 'public');
app.use(express.static(publicPath));

// Serve index.html for all routes (client-side routing)
app.get('*', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});

export default app;
