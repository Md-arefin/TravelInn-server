const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config();
const { MongoClient, ServerApiVersion } = require('mongodb');
const port = process.env.port || 5000;

const uri = `mongodb+srv://${process.env.USER_Name}:${process.env.PASSWORD}@cluster0.bqstehg.mongodb.net/?retryWrites=true&w=majority`;

// middleware
app.use(express.json());
app.use(cors());

// server starts
app.get('/', (req, res) => {
    res.send("Travlling server is running...")
});


// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        await client.connect();

        // user related API
        


        // Send a ping to confirm a successful connection
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
    }
}
run().catch(console.dir);


// server listen
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
})