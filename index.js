const express = require('express');
const mongoose = require('mongoose');

const helloRoute = require('./routes/hello');

const PORT = 3000;

const app = express();
const DB = "mongodb+srv://petereniolaogungbe:peterEniola@cluster0.rkhvpkr.mongodb.net/?appName=Cluster0"

app.use(helloRoute);
mongoose.connect(DB).then(() => {
    console.log('connected to mongo');
}).catch(err => {
    console.log('Database connection error:', err.message);
});



app.listen(PORT, "0.0.0.0", function () {
    console.log(`server is running on port ${PORT}`);
})