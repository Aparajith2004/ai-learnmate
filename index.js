const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = 8000;

app.use(cors());
app.use(express.json());

// Serve static frontend
app.use(express.static(path.join(__dirname, 'public')));

// ✅ API route
app.post('/api/data', (req, res) => {
  const data = req.body;
  console.log('Received from client:', data);
  res.json({ success: true, message: 'Data received', data });
});

// ✅ Fallback: serve React index.html for unknown frontend routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});


