const express = require('express');

app.get('/', (req, res) => {
  res.send({ hi: 'there' });
});

app.listen(5000)
