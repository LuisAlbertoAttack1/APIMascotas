// const express = require("express");
// app.listen(3303, () => { 
//     console.log("APIMascotas");
// })
require("dotenv").config();
const express = require("express");
const dbConexion = require("./database/config");
const cors = require("cors");

dbConexion()
const app = express();

app.use(cors())
app.use(express.json())
app.use("/api/mascotas", require("./routes/mascotas"))

app.listen(process.env.PORT,() =>{
    console.log(`App escuchando http://localhost:${process.env.PORT}`);
})