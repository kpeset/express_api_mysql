const database = require("../../database");

const getArticles = (req, res) => {
  database
    .query("SELECT * FROM article ")
    .then(([article]) => {
      res.json(article);
    })
    .catch((err) => {
      console.error("erreurs: ", err);
    });
};

const getArticlesWithAuthor = (req, res) => {
  database
    .query(
      "SELECT user.username, article.title, article.content, article.id FROM article JOIN user ON user.id=article.user_id"
    )
    .then(([article]) => {
      res.json(article);
    })
    .catch((err) => {
      console.error("erreurs: ", err);
    });
};

const getArticlesByAuthorId = (req, res) => {
  const userId = req.params.id;
  database
    .query("SELECT * FROM article WHERE user_id=?", [userId])
    .then(([articles]) => {
      res.json(articles);
    })
    .catch((err) => {
      console.error(err);
    });
};

const createArticle = (req, res) => {
  const body = req.body;

  database
    .query(
      "INSERT INTO article (title, content, user_id, creation_datetime) VALUES (?, ?, ?, NOW())",
      [body.title, body.content, body.user_id]
    )
    .then((results) => {
      console.info(results);
      res.send("Article ajouté avec succès");
    })
    .catch((err) => {
      console.error(err);
    });
};

const updateArticle = (req, res) => {
  const id = req.params.id;
  const body = req.body;

  database
    .query(
      "UPDATE article SET title=?, content=?, creation_datetime = NOW() WHERE id = ?",
      [req.body.title, req.body.content, id]
    )
    .then((result) => {
      res.send("Article modifié avec succèes");
    })
    .catch((err) => {
      console.error(err);
    });
};

const deleteArticle = (req, res) => {
  const id = req.params.id;

  database
    .query("DELETE FROM article WHERE id=?", [id])
    .then((result) => {
      res.send("Article supprimé avec succès");
    })
    .catch((err) => {
      console.error(err);
    });
};

module.exports = {
  getArticlesWithAuthor,
  getArticles,
  getArticlesByAuthorId,
  createArticle,
  updateArticle,
  deleteArticle,
};
