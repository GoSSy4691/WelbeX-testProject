import express from "express";
import ItemsController from "../controllers/items.controller";

const router = express.Router();

router.post("/item", ItemsController.create);
router.get("/items", ItemsController.getAll);
router.get("/item/:id", ItemsController.getOne);
router.put("/item", ItemsController.update);
router.delete("/item/:id", ItemsController.delete);

export default router;
