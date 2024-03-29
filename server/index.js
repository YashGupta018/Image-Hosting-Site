import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true}));
app.use(cors());

const CONNECTION_URL = 'mongodb+srv://yashguptaa:B9xXJjtiVb18LjcR@imagehosting.mp8h8sp.mongodb.net/?retryWrites=true&w=majority';
const PORT = process.env.PORT;

mongoose.connect(CONNECTION_URL).then(() => app.listen(PORT, () => console.log(`Server running on port : ${PORT}`)))

//listening on the specified port by the server

app.listen(PORT, function(err){
    if (err) console.log("Error in server setup")
    console.log("Server listening on Port", PORT);
})