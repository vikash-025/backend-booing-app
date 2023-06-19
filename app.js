const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const adminRouter = require("./routes/admin-routes");
const movieRouter = require("./routes/movie-routes");
const bookingsRouter = require("./routes/booking-routes");
const userRouter = require("./routes/user-routes");

dotenv.config();

const app = express();

// middlewares
app.use(cors());
app.use(express.json());
app.use("/user", userRouter);
app.use("/admin", adminRouter);
app.use("/movie", movieRouter);
app.use("/booking", bookingsRouter);

mongoose
  .connect(
    `mongodb+srv://vikash:${process.env.MONGODB_PASSWORD}@cluster0.ay3xzmr.mongodb.net/?retryWrites=true&w=majority`
  )
  .then(() => {
    app.listen(5000, () => {
      console.log("Connected to database And Server is running");
    });
  })
  .catch((e) => console.log(e));

// console.log("hello");
// Ca8MVQtPTZJqZdSp
