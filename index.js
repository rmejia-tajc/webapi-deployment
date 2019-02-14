require('dotenv').config();

// console.log('\nGreeting:', process.env.GREET);

const server = require('./api/server.js');

// a hosting service might assign a port dinamically
// Environment Variable are system wide
const port = process.env.PORT || 4000;
server.listen(port, () => {
  console.log(`\n*** Server Running on http://localhost:${port} ***\n`);
});
