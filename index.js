// Mongoose 클라이언트 설정: db.js 파일 생성

const mongoose = require("mongoose");
const MONGODB_URI =
  "mongodb+srv://gracelee087:potMcC75Ixrv8CMJ@poke.o9jvt9m.mongodb.net/?retryWrites=true&w=majority";
// "mongodb+srv://gracelee087:potMcC75Ixrv8CMJ@poke.o9jvt9m.mongodb.net/"; // MongoDB Atlas에서 얻은 연결 문자열로 대체해야 합니다.
const express = require("express");
const cors = require("cors");
const gameRoutes = require("./routes/game");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

const app = express();
app.use(cors());
app.use(express.json());

connectDB();

// @dec     Initial
app.get("/", (req, res) => {
  res.status(200).json({ data: "Hello, World!" });
});

app.use("/game", gameRoutes); // Use your game routes

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
