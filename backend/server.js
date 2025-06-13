const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fs = require('fs');
const { createObjectCsvWriter } = require('csv-writer');

const app = express();
const PORT = 3001;

app.use(cors());
app.use(bodyParser.json());

const csvWriter = createObjectCsvWriter({
  path: 'clients.csv',
  header: [
    { id: 'name', title: 'Name' },
    { id: 'phone', title: 'Phone' },
    { id: 'email', title: 'Email' },
    { id: 'address', title: 'Address' },
    { id: 'yardSize', title: 'Yard Size' },
    { id: 'gateSize', title: 'Gate Size' },
    { id: 'gateInstructions', title: 'Gate Instructions' },
    { id: 'terrain', title: 'Terrain' },
    { id: 'yardFeatures', title: 'Yard Features' },
    { id: 'hasPets', title: 'Has Pets' },
    { id: 'services', title: 'Services' },
    { id: 'otherNotes', title: 'Other Notes' },
  ],
  append: true,
});

app.post('/submit-client', async (req, res) => {
  const data = req.body;

  if (!data.name || !data.email || !data.address) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  try {
    const record = {
      ...data,
      yardFeatures: Array.isArray(data.yardFeatures) ? data.yardFeatures.join('; ') : '',
      services: Array.isArray(data.services) ? data.services.join('; ') : '',
    };

    await csvWriter.writeRecords([record]);
    res.status(200).json({ message: 'Client info saved successfully' });
  } catch (err) {
    console.error('CSV Write Error:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${3001}`);
});
