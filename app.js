const express = require("express");
const cors = require("cors");

const app = express();
const port = 3000;

const userRouter = require("./routes/userRouter");
app.use(cors);

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:5500'); // Permite el acceso desde este origen
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE'); // Métodos permitidos
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization'); // Cabeceras permitidas
  next();
});

app.use(express.json());

app.use(express.static("public"));

app.use("/api/users", userRouter);

app.listen(port, () => {
  console.log(`Servidor corriendo en http:localhost:${port}`);
});
