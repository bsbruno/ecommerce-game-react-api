const express = require("express");
const app = express();
const router = express.Router();
let Home = require("../controllers/HomeController");

router.get("/", Home.index);
router.post("/game", Home.create);
router.get("/game", Home.listAll);
router.put("/game/:id", Home.updateGame);
router.delete("/game/:id", Home.deleteGame);

module.exports = router;
