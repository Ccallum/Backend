const mongoose = require('mongoose');
const app = require('./app');

const port = 3000;
const db = 'mongodb://127.0.0.1:27017/API_1';

mongoose.connect(db, (error) => {
  if (error) console.log('Database unable to connect');
  else {
    app.listen(port, () => {
      console.log('Node server running on http://localhost:3000');
    });
  }
});
