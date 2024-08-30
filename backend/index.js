import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import userRoute from "./routes/user.route.js";
import cors from "cors";

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 5001;
const URI = process.env.MONGODB_URI;

try{
mongoose.connect(URI)
  console.log("DB connected");
}
  catch(error)
  {console.error("DB connection error:", error)};


  app.use("/user",userRoute);
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
