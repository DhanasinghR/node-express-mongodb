const express = require("express");
const router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  // res.render('index', { title: 'Singh' });
  res.json({ name: "singh" });
});

router.post("/", (req, res, next) => {
  res.json({ name: "singh post2", ...req.body });
});

router.put("/", (req, res, next) => {
  res.json({ name: "singh put", ...req.body });
});

// router.delete("/:id", (req, res, next) => {
//   res.json({name: "singh delete", id: req.params.id});
// });

// router.get("/:id", (req, res, next) => {
//   res.json({name: "singh getbyId", id: req.params.id});
// });

module.exports = router;
