const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 8000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('✅ Backend is running perfectly without MongoDB!');
});

app.post('/api/data', (req, res) => {
  const data = req.body;
  console.log('Received from client:', data);
  res.json({ success: true, message: 'Data received', data });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});

