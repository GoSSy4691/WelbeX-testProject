"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const items_controller_1 = __importDefault(require("../controller/items.controller"));
const router = (0, express_1.Router)();
router.post("/item", items_controller_1.default.createItem);
router.get("/item/:id", items_controller_1.default.getItem);
router.get("/items", items_controller_1.default.getItems);
router.put("/item", items_controller_1.default.updateItem);
router.delete("/item/:id", items_controller_1.default.deleteItem);
exports.default = router;
