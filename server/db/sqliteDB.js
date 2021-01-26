const sqlite3 = require("sqlite3").verbose();
const users = require("./users.json");
const users_statistics = require("./users_statistic.json");

const connectTodatdBase = () => {
  return new sqlite3.Database(":memory:", (err) => (err ? console.log(err) : console.log("conected")));
};
const userStatistics = connectTodatdBase();
const createTables = () => {
  userStatistics.serialize(function () {
    userStatistics.run(
      "CREATE TABLE if not exists users (id INT PRIMARY KEY, first_name TEXT, last_name TEXT, email TEXT, gender TEXT, ip_address TEXT)",
      (err) => err && console.log(err)
    );
    const stmt = userStatistics.prepare("INSERT INTO users VALUES (?,?,?,?,?,?)");
    users.forEach((el) => {
      stmt.run(el.id, el.first_name, el.last_name, el.email, el.gender, el.ip_address);
    });
    stmt.finalize();
  });

  userStatistics.serialize(function () {
    userStatistics.run(
      "CREATE TABLE if not exists users_statistics (user_id INT , date TEXT, page_views INT, clicks INT)",
      (err) => err && console.log(err)
    );
    const stmt = userStatistics.prepare("INSERT INTO users_statistics VALUES (?,?,?,?)");
    users_statistics.forEach((el) => {
      stmt.run(el.user_id, el.date, el.page_views, el.clicks);
    });
    stmt.finalize();
  });
};

module.exports = { userStatistics, createTables };
