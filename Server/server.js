const express = require('express');
const router = require('./routes/users');
//const router = express.router();
const app = express();  // it will create express server.
const connectDB = require("./config/db.config");

connectDB();
app.use(express.json());
app.use("/api/auth",require("./routes/auth"));
app.use("/api/users", require("./routes/users"));
app.use('/api/profile', require("./routes/profile"));
app.use('/api/posts',require("./routes/posts"));
app.get('/', (req, res) => {
    res.status(200).json({ msg: 'Hello from 47' });
});


app.listen(9000, () => console.log("Server started"));
