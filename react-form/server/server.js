const express = require("express");
const mysql = require("mysql2");

const cors = require("cors");

const app = express();

app.use(express.json());

app.use(cors("*"));

const connection = mysql.createConnection({
  host: "localhost",
  password: "",
  user: "root",
  database: "users",
});

app.post("/", (req, res) => {
  const { email, phone, name } = req.body;

  const query = "INSERT INTO `users`(`email`, `name`, `phone`) VALUES (?,?,?)";

  connection.query(query, [email, name, phone], (err, result) => {
    if (result.affectedRows > 0)
      return res.status(201).send({
        statusCode: 201,
        message: "Created",
        user: {
          email,
          name,
          phone,
        },
      });

    return res.status(400).send({
      statusCode: 400,
      message: "Something went wrong",
    });
  });
});

app.put("/:userId", (req, res) => {
  const userId = req.params;
  const { email, phone, name } = req.body;

  connection.query(
    "UPDATE users SET email = ?,phone = ?,name = ? WHERE id = ?",
    [email, phone, name, userId.userId],
    (err, result) => {
      res.status(result.affectedRows > 0 ? 200 : 400).send({
        message: "updaet",

        user: {
          email,
          phone,
          name,
          id: result.userId,
        },
      });
    }
  );
});

app.delete("/:userId", (req, res) => {
  connection.query(
    "DELETE FROM users WHERE id = ?",
    [req.params.userId],
    (_, result) => {
      res.status(result.affectedRows > 0 ? 200 : 400).send({
        removed: true,
      });
    }
  );
});

app.get("/", (req, res) => {
  connection.query("SELECT * FROM users", (err, result) => {
    return res.send(result);
  });
});

app.listen(3030, () => console.log("server runs on 3030"));
