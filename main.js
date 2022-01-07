const express = require("express");
const app = express();
app.use(express.json());

const cors = require("cors");
app.use(cors());

const { insertMessage, showMessage } = require("./user");

app.get("/chat", async (req, res) => {
  const list = await showMessage();
  res.json(list);
});

app.post("/hello", async (req, res) => {
  const list = req.body;
  await insertMessage(list);
  res.json({ message: "Data added successfully!!" });
});

app.listen(5000, () => console.log("server Started"));
