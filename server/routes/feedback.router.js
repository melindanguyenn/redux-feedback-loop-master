const express = require("express");
const router = express.Router();
const pool = require("../modules/pool.js");

//GET route to get all results from database
router.get("/", (req, res) => {
  let queryText = 'SELECT * FROM "feedback"';
  pool
    .query(queryText)
    .then(result => {
      res.send(result.rows);
    })
    .catch(error => {
      console.log("cannot get feedback", error);
      res.sendStatus(500);
    });
});


//sanitized POST route
router.post("/", (req, res) => {
  let newFeedback = req.body;
  console.log("creating new feedback", newFeedback);
  let queryText = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
    VALUES ($1, $2, $3, $4);`;
  pool
    .query(queryText, [
      newFeedback.feeling,
      newFeedback.understanding,
      newFeedback.support,
      newFeedback.comment
    ])
    .then(result => {
      res.sendStatus(201);
    })
    .catch(error => {
      console.log("cannot add feedback", error);
      res.sendStatus(500);
    });
});

module.exports = router;
