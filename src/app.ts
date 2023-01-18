const mongoose = require("mongoose");
const dotenv = require("dotenv");
const express = require("express");
import {router} from "./routes/routes";

dotenv.config();
const app = express()
app.use(express.json());

mongoose.connect(
   process.env.MONGODB_URL,
   {
      useUnifiedTopology: true,
      useNewUrlParser: true,
   },
   (error: any) => {
      if(error){
         console.log("Error...");
      } else{
         console.log("DB Connected");
      }
   }
)

app.use("/", router);

 app.listen(8080, () => {
    console.log("Server is running at 8080 ...");
 });