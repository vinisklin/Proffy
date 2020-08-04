import express from "express";

const app = express();

app.use(express.json);

app.get('/users', (request, response) => {
  const users = [
    { name: "Vinicius", age: 25 },
    { name: "Andressa", age: 21 },
  ];

  return response.json(users);
});

app.listen(3333);