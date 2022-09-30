const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const invoice = require('./routes/invoice')
let router = express.Router();


const PORT = process.env.PORT || 5000;
// app.get('/',(req,res)=>res.send('Hi world!'))
app.use(express.json());
app.use(cors());
app.use('/api',invoice);



app.listen(PORT,() => console.log(`The server has started on port ${PORT}`));