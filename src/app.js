const express = require("express");

const app = express();

app.use(express.json());

const articleControllers = require("./controllers/articleControllers");

app.get("/", (req, res) => res.send("API - BLOG"));

app.get("/articles", articleControllers.getArticlesWithAuthor);
app.post("/articles", articleControllers.createArticle);
app.put("/articles/:id", articleControllers.updateArticle);
app.delete("/articles/:id", articleControllers.deleteArticle);

app.get("/articles/:id", articleControllers.getArticlesByAuthorId);

module.exports = app;
