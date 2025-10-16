import express from "express";

const app = express();
const PORT = 8000;

app.get("/user", (req, res) => {
  res.send(`[
{
"id": "1",
"username": "John",
"phone": "99009900"
},
{
"id": "2",
"username": "Bob",
"phone": "99112233"
}
]`);
});

app.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}/user`);
});
