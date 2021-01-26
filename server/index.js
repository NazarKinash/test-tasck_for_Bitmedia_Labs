const express = require("express");
const router = express.Router();
const app = express();
const cors = require("cors");

const { userStatistics, createTables } = require("./db/sqliteDB");

createTables();

app.use(cors());

app.get("/users", (req, res) => {
  const {
    query: { page, numberOfUsers },
  } = req;
  const skip = (page - 1) * numberOfUsers;
  const usersList = {};
  userStatistics.serialize(() => {
    userStatistics.all(`SELECT * FROM users LIMIT ${skip}, ${numberOfUsers}`, (err, result) => {
      usersList.users = result;
    }),
      userStatistics.all(
        `SELECT * FROM users_statistics WHERE user_id>${skip} AND user_id<=${page * numberOfUsers}`,
        (err, result) => {
          usersList.users.map((user) => {
            user.total_clicks = result.filter((el) => el.user_id === user.id).reduce((acc, el) => acc + el.clicks, 0);
            user.total_page_views = result
              .filter((el) => el.user_id === user.id)
              .reduce((acc, el) => acc + el.page_views, 0);
            return user;
          });
        }
      ),
      userStatistics.all(`SELECT COUNT(*) FROM USERS`, (err, result) => {
        usersList.numberOfPage = Math.ceil(result[0]["COUNT(*)"] / Number(numberOfUsers));
        usersList.page = page;
        return res.status(200).send(usersList);
      });
  });
});

app.get("/users/user/:user_id", (req, res) => {
  const {
    params: { user_id },
  } = req;
  const userData = {};
  userStatistics.serialize(() => {
    userStatistics.all(`SELECT * FROM users_statistics WHERE user_id = ${user_id}`, (err, result) => {
      if (err) {
        return res.status(404).send(err.message);
      }
      console.log(result);

      userData.active = result;
    });
  });
  userStatistics.get(`SELECT first_name, last_name  FROM users WHERE id = ${user_id}`, (err, result) => {
    if (err) {
      return res.status(404).send(err.message);
    }
    userData.userName = result;
    return res.status(200).send(userData);
  });
});

app.listen(4848, (err) => (err ? console.log(err) : console.log(`Server started: ${4848}`)));
