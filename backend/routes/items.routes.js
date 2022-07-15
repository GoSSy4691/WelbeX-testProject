const Router = require("express");
const router = new Router();

const itemsController = require("../controller/items.controller");

router.post("/item", itemsController.createItem);
router.get("/item/:id", itemsController.getItem);
router.get("/items", itemsController.getItems);
router.put("/item", itemsController.updateItem);
router.delete("/item/:id", itemsController.deleteItem);

module.exports = router;
