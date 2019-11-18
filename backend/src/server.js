const app = require('./app');

const port = process.env.PORT || 3333;

app.listen(port, function() {
  console.log(`BACKEND is running on port ${port}`)
});