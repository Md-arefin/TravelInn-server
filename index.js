const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config();
const port = process.env.port || 5000;

// middleware
app.use(express.json());
app.use(cors());

// server starts
app.get('/', (req, res) =>{
    res.send("Travlling server is running...")
});




// server listen
app.listen(port, ()=>{
    console.log(`Server is running on port: ${port}`);
})