const db = require("../db");

class ItemsController {
  async createItem(req, res) {
    const { date, name, quantity, distance } = req.body;
    const newItem = await db.query(
      "INSERT INTO items (date, name, quantity, distance) values ($1, $2, $3, $4) RETURNING *",
      [date, name, quantity, distance]
    );
    res.json(newItem.rows[0]);
  }

  async getItems(req, res) {
    const items = await db.query("SELECT * FROM items");
    res.json(items.rows);
  }

  async getItem(req, res) {
    const id = req.params.id;
    const item = await db.query("SELECT * FROM items WHERE id = $1", [id]);
    res.json(item.rows[0]);
  }

  async updateItem(req, res) {
    const { date, name, quantity, distance, id } = req.body;
    const item = await db.query(
      "UPDATE ITEMS set date = $1, name = $2, quantity = $3, distance = $4 WHERE id = $5 RETURNING *",
      [date, name, quantity, distance, id]
    );
    res.json(item.rows[0]);
  }

  async deleteItem(req, res) {
    const id = req.params.id;
    const item = await db.query("DELETE FROM items WHERE id = $1", [id]);
    res.json(item.rowCount);
  }
}

module.exports = new ItemsController();
