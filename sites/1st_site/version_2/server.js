import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { existsSync } from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const startPort = parseInt(process.env.PORT) || 3000;

// Check if dist folder exists
const distPath = path.join(__dirname, 'dist');
if (!existsSync(distPath)) {
  console.error('❌ Error: dist folder not found!');
  console.log('💡 Please run "npm run build" first to create the production build.');
  process.exit(1);
}

// Serve static files from dist (after build)
app.use(express.static(distPath));

// Serve images if not in dist
const publicImagesPath = path.join(__dirname, 'public', 'allimeges');
if (existsSync(publicImagesPath)) {
  app.use('/allimeges', express.static(publicImagesPath));
}

// Handle React routing, return all requests to React app
app.get('*', (req, res) => {
  res.sendFile(path.join(distPath, 'index.html'));
});

// Start server with error handling and auto port finding
const startServer = (port) => {
  const server = app.listen(port, () => {
    console.log(`✅ Server is running at http://localhost:${port}`);
    console.log(`📦 Serving files from: ${distPath}`);
  });

  server.on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
      if (process.env.PORT) {
        // If PORT is explicitly set, don't change it
        console.error(`❌ Error: Port ${port} is already in use!`);
        console.log(`💡 Try one of these solutions:`);
        console.log(`   1. Stop the process: npm run kill:3000`);
        console.log(`   2. Use a different port: PORT=3001 npm start`);
        process.exit(1);
      } else {
        // Auto-find available port
        console.log(`⚠️  Port ${port} is in use, trying port ${port + 1}...`);
        startServer(port + 1);
      }
    } else {
      console.error('❌ Server error:', err);
      process.exit(1);
    }
  });
};

startServer(startPort);
