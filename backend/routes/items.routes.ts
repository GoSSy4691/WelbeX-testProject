import express from "express";
import ItemsController from "../controller/items.controller";

const router = express.Router();

router.post("/item", ItemsController.createItem);
router.get("/item/:id", ItemsController.getItem);
router.get("/items", ItemsController.getItems);
router.put("/item", ItemsController.updateItem);
router.delete("/item/:id", ItemsController.deleteItem);

export default router;
