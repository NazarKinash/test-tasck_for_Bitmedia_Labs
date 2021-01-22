const express = require("express");
const router = express.Router();
const app = express();

const { userStatistics, createTables } = require("./db/sqliteDB");

app.use(cors());
app.use(express.json());

app.use("/users", async (req, res) => {
  const {
    params: { page },
  } = req;

  const response = userStatistics.all(`SELECT * FROM users LIMIT ${page - 1}, 16`, (err, result) => {
    return result;
  });

  console.log(response);

  return res.status(200).send(response);
});

createTables();

app.listen(4848, (err) => (err ? console.log(err) : console.log(`Server started: ${4848}`)));
