const dotenv = require('dotenv');
dotenv.config();

const app = require('./src/app');
const port = 3500;

app.listen(port, () => console.log(`server is up and running by prot ${port}`))