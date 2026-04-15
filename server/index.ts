import express, { Request, Response } from "express";
import { createServer } from "http";
import path from "path";
import { fileURLToPath } from "url";
import { existsSync } from "fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer(): Promise<void> {
  const app = express();
  const server = createServer(app);

  // Serve static files from dist/public
  // Works in both development and production (including Vercel)
  const staticPath = path.resolve(__dirname, "public");

  console.log(`Serving static files from: ${staticPath}`);

  app.use(express.static(staticPath));

  // Handle client-side routing - serve index.html for all routes
  app.get("*", (_req: Request, res: Response) => {
    const indexPath = path.join(staticPath, "index.html");
    // Check if index.html exists, otherwise send 404
    if (!existsSync(indexPath)) {
      console.error(`index.html not found at ${indexPath}`);
      return res.status(404).send("index.html not found. Build may have failed.");
    }
    res.sendFile(indexPath);
  });

  const port = process.env.PORT || 3000;

  server.listen(port, () => {
    console.log(`Server running on http://localhost:${port}/`);
  });
}

startServer().catch(console.error);
