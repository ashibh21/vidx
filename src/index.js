import dotenv from "dotenv";
dotenv.config({
  path: "./env",
});

import express from "express";
import connectDB from "./db/index.js";

const app = express();
connectDB();

// (async () => {
//   try {
//     await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
//     app.on("error", (error) => {
//       console.log("ERR: ", error);
//       throw error;
//     });
//     app.listen(process.env.PORT, () => {
//       console.log(`App running in port ${process.env.PORT}`);
//     });
//   } catch (error) {
//     console.log("ERR: ", error);
//     throw error;
//   }
// })();
