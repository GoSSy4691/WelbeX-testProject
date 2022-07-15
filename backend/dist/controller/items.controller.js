"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = __importDefault(require("../db"));
class ItemsController {
    static createItem(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { date, name, quantity, distance } = req.body;
            const newItem = yield (0, db_1.default)("INSERT INTO items (date, name, quantity, distance) values ($1, $2, $3, $4) RETURNING *", [date, name, quantity, distance]);
            res.json(newItem.rows[0]);
        });
    }
    static getItems(_req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const items = yield (0, db_1.default)("SELECT * FROM items");
            res.json(items.rows);
        });
    }
    static getItem(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const item = yield (0, db_1.default)("SELECT * FROM items WHERE id = $1", [id]);
            res.json(item.rows[0]);
        });
    }
    static updateItem(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { date, name, quantity, distance, id } = req.body;
            const item = yield (0, db_1.default)("UPDATE ITEMS set date = $1, name = $2, quantity = $3, distance = $4 WHERE id = $5 RETURNING *", [date, name, quantity, distance, id]);
            res.json(item.rows[0]);
        });
    }
    static deleteItem(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const item = yield (0, db_1.default)("DELETE FROM items WHERE id = $1", [id]);
            res.json(item.rowCount);
        });
    }
}
exports.default = ItemsController;
