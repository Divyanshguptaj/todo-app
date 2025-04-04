const express = require("express");
const app = express();
const database = require("./config/database");
const cors = require("cors");
require("dotenv").config();

const PORT = process.env.PORT || 4000;
database.connect();
app.use(express.json());

app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);

// ✅ Correctly Import Routes
const todoRoutes = require("./routes/todoroutes");
app.use("/todo", todoRoutes);

app.listen(PORT, () => {
  console.log(`🚀 Server is running at port ${PORT}`);
});