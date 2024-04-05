const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON requests
app.use(express.json());

let languages = {
  "ruby": "A dynamic, reflective, object-oriented, general-purpose programming language.",
  "java": "A high-level, class-based, object-oriented programming language.",
  
};

// GET method to retrieve all programming languages
app.get('/languages', (req, res) => {
  res.json(languages);
});

// POST method to add a new programming language
app.post('/languages', (req, res) => {
  const { name, description } = req.body;
  if (!name || !description) {
    return res.status(400).json({ error: 'Both name and description are required.' });
  }

  languages[name] = description;
  res.status(201).json({ message: 'Programming language added successfully.' });
});

// PUT method to update a programming language description
app.put('/languages/:name', (req, res) => {
  const { name } = req.params;
  const { description } = req.body;
  
  if (!languages[name]) {
    return res.status(404).json({ error: 'Programming language not found.' });
  }

  languages[name] = description;
  res.json({ message: 'Programming language updated successfully.' });
});

// PATCH method to partially update a programming language 
app.patch('/languages/:name', (req, res) => {
  const { name } = req.params;
  const { description } = req.body;
  
  if (!languages[name]) {
    return res.status(404).json({ error: 'Programming language not found.' });
  }

  languages[name] = description;
  res.json({ message: 'Programming language description updated successfully.' });
});

// DELETE method to remove a programming language
app.delete('/languages/:name', (req, res) => {
  const { name } = req.params;
  
  if (!languages[name]) {
    return res.status(404).json({ error: 'Programming language not found.' });
  }

  delete languages[name];
  res.json({ message: 'Programming language deleted successfully.' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
