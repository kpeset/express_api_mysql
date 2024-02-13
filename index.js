require("dotenv").config();

const app = require("./src/app");

const port = process.env.APP_PORT ?? 5000;

app.listen(port, () => {
  console.info(`Le serveur fonctionne sur le port ${port}`);
});
