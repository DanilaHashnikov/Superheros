import dotenv from "dotenv"
import express from "express";
import mongoose from "mongoose";
import superheroRouter from './routers/superheroRouter.js'

dotenv.config();

const PORT = process.env.PORT || 5000;
const DB_URI = "mongodb+srv://user:user@cluster0.etpvn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const app = express();

app.use(express.json());
app.use('/superheroes', superheroRouter);

app.get('/', (req, res) => {
    res.json("first get is working")
})

async function start() {
    try {
        await mongoose.connect(DB_URI, {useUnifiedTopology: true, useNewUrlParser: true})
        app.listen(PORT, () => console.log(`server started on port ${PORT}`));
    } catch (e) {
        console.log(e);
    }
}

start();

