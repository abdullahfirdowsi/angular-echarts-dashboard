const express = require('express');
const path = require('path');
const fs = require('fs');
const cors = require('cors');
const fetch = require('node-fetch');

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

// API forwarding using node-fetch
app.use('/api', async (req, res) => {
  const targetUrl = `https://interns-api-ovvy.onrender.com${req.url}`;
  
  try {
    console.log(`Forwarding request to: ${targetUrl}`);
    
    const response = await fetch(targetUrl, {
      method: req.method,
      headers: {
        'Content-Type': 'application/json',
        ...req.headers
      },
      body: ['POST', 'PUT', 'PATCH'].includes(req.method) ? JSON.stringify(req.body) : undefined
    });

    const data = await response.json();
    res.status(response.status).json(data);
  } catch (error) {
    console.error('API Error:', error);
    res.status(500).json({
      error: 'API Error',
      message: 'Unable to reach the API server'
    });
  }
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'UP' });
});

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
