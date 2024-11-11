import express from "express";
import session from "express-session";
import userRouter from "./src/routes/userRoute.js";
import problemRouter from "./src/routes/problemRoute.js";
import authorize from "./src/middlewares/authorize.js";
import dotenv from 'dotenv'
dotenv.config();

const app = express();
const port = 3000;

app.use(express.json())
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.send("Welcome to Coding Platform")
})

// Handling session
const store = new session.MemoryStore();
app.use(session({
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: true,
  cookie: {
    maxAge: 60000
  },
  store
}))

// Setting up routes
app.use('/user', userRouter);
app.use('/problem', authorize, problemRouter);

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})
