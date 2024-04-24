const { Router, Response } = require("pepesan");
const BotController = require("./controller/BotController");
const f = require("./utils/Formatter");

const router = new Router();

router.menu(f("menu.daftarProduk"), [BotController, "product"]);
router.menu(f("menu.sched"), [BotController, "sched"]);
router.menu(f("menu.kereta")), [BotController, "kereta"]
router.keyword("*", [BotController, "introduction"]);

module.exports = router;
