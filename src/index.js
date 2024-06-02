import dotenv from "dotenv";
dotenv.config({
  path: "./env",
});


connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log("Process running");
    });
  })
  .catch((err) => {
    console.log("MONGODB conn failed !!", err);
  });
