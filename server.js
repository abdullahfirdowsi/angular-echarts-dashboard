import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';
import cors from 'cors';
import { createProxyMiddleware } from 'http-proxy-middleware';

const app = express();

// CORS configuration
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With'],
  credentials: true,
  maxAge: 86400
}));

// Enable pre-flight requests
app.options('*', cors());

// Parse JSON bodies
app.use(express.json());

// API forwarding using http-proxy-middleware
app.use('/api', createProxyMiddleware({
  target: 'https://interns-api-ovvy.onrender.com',
  changeOrigin: true,
  pathRewrite: {
    '^/api': '' // Remove the /api prefix when forwarding
  },
  logLevel: 'debug',
  onProxyReq: (proxyReq, req, res) => {
    // Log outgoing requests
    console.log(`Forwarding request to: ${proxyReq.protocol}//${proxyReq.host}${proxyReq.path}`);
  },
  onError: (err, req, res) => {
    console.error('Proxy Error:', err);
    res.status(500).json({
      error: 'Proxy Error',
      message: 'Unable to reach the API server'
    });
  }
}));

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'UP' });
});

// Get current file path (replacement for __dirname in ES modules)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve static files
const distPath = path.join(__dirname, 'dist/angular-echarts-dashboard');

// Verify distribution path
if (fs.existsSync(distPath)) {
  // Serve static files
  app.use(express.static(distPath));
  
  // All other routes to Angular app
  app.get('*', (req, res) => {
    res.sendFile(path.join(distPath, 'index.html'));
  });
} else {
  console.error('Distribution directory not found:', distPath);
  // Set up a route to show the error
  app.use((req, res) => {
    res.status(500).send('Application files not found. Please rebuild the application.');
  });
}

// Error handling
app.use((err, req, res, next) => {
  console.error('Server Error:', err);
  res.status(500).send('Internal Server Error');
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
  console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
});
