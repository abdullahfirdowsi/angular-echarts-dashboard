const express = require('express');
const path = require('path');
const fs = require('fs');
const cors = require('cors');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

// Configure CORS
app.use(cors({
  origin: true, // Reflects the request origin as allowed
  credentials: true, // Allows cookies to be sent with requests
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With']
}));

// Enable pre-flight requests for all routes
app.options('*', cors());

const distPath = path.join(__dirname, 'dist/angular-echarts-dashboard');

// Verify the distribution path exists
if (!fs.existsSync(distPath)) {
  console.error(`Error: Distribution directory not found at ${distPath}`);
}

// API Proxy Configuration - must be defined before static files
app.use('/api', createProxyMiddleware({
  target: 'https://interns-api-ovvy.onrender.com',
  changeOrigin: true,
  pathRewrite: {
    '^/api': '/api' // Rewrite path if needed
  },
  onProxyReq: (proxyReq, req, res) => {
    // Log proxy requests for debugging
    console.log(`Proxying ${req.method} request to: ${proxyReq.path}`);
  },
  onProxyRes: (proxyRes, req, res) => {
    // Log proxy responses for debugging
    console.log(`Proxy response: ${proxyRes.statusCode} for ${req.url}`);
  },
  onError: (err, req, res) => {
    // Handle proxy errors
    console.error('Proxy error:', err);
    res.status(500).json({
      status: 500,
      message: 'API Service Temporarily Unavailable',
      timestamp: new Date().toISOString(),
      path: req.url
    });
  }
}));

// Serve static files
app.use(express.static(distPath));

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'UP', timestamp: new Date().toISOString() });
});

// Angular routes - place this after API routes
app.get('/*', (req, res) => {
  const indexPath = path.join(distPath, 'index.html');
  
  // Check if index.html exists
  if (fs.existsSync(indexPath)) {
    res.sendFile(indexPath);
  } else {
    res.status(404).send('Application files not found. Build may have failed.');
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Server error:', err);
  
  // Send structured error response
  res.status(500).json({
    status: 500,
    message: 'Internal Server Error',
    error: process.env.NODE_ENV === 'production' ? undefined : err.message,
    timestamp: new Date().toISOString(),
    path: req.url
  });
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
  console.log(`API requests will be proxied to: https://interns-api-ovvy.onrender.com`);
});
