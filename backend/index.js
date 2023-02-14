const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors");
const mongoose = require("mongoose");
const config =require("./config");
const mongoURI = config.db.development;

app.use(cors()); //CORS enabled
