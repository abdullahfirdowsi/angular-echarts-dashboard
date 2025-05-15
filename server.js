const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();

const distPath = path.join(__dirname, 'dist/angular-echarts-dashboard');

// Verify the distribution path exists
if (!fs.existsSync(distPath)) {
  console.error(`Error: Distribution directory not found at ${distPath}`);
}

// Serve static files
app.use(express.static(distPath));

// Route all requests to index.html
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
  res.status(500).send('Something went wrong on the server.');
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
