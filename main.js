import express from "express";
import fs from "fs";
import { text } from "stream/consumers";
const app = express();
const PORT = 8000;
app.use(express.json());

let users = fs.readFile(text.json);
app.get("/user", (req, res) => {
  res.status(200).json(users);
});

app.post("/user", (req, res) => {
  const newUser = req.body;
  users.push(newUser);

  res.send(`5th User Added`);
});

app.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}/user`);
});

// app.put(`/user`, (req, res) => {
//   const updatedUser = req.body;
//   users = users.map((user) =>
//     user.id === updatedUser.id ? updatedUser : user
//   );

//   res.send(`User updated seccessfully`);
// });

// app.delete(`/user/:id`, (req, res) => {
//   const id = req.params.id;

//   const index = users.findIndex((user) => user.id === id);
//   if (index !== -1) {
//     const deletedUser = users.splice(index, 1)[1];
//   }
//   res.json({ message: "User deleted", user: deletedUser });
// });
