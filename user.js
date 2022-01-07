const mysql = require("mysql");
const Promise = require("bluebird");
Promise.promisifyAll(require("mysql/lib/Connection").prototype);

const dbinfo = {
  host: "localhost",
  user: "root",
  password: "cdac",
  database: "wptexam",
};

const insertMessage = async (user) => {
  const connection = mysql.createConnection(dbinfo);

  await connection.connectAsync();

  let sql = `INSERT INTO MESSAGE values(?)`;
  await connection.queryAsync(sql, [messagespart]);

  console.log("Successful!");
  await connection.endAsync();
};

const message = {
  messagespart: "Hello",
};
const showMessage = async () => {
  const connection = mysql.createConnection(dbinfo);

  await connection.connectAsync();
  let sql = `SELECT * FROM message`;
  let list = await connection.queryAsync(sql);

  await connection.endAsync();
  return list;
};

module.exports = { insertMessage, showMessage };
