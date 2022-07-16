import express from "express";
import db from "../db";

export default class ItemsController {
  static async createItem(req: express.Request, res: express.Response) {
    try {
      const { date, name, quantity, distance } = req.body;
      const newItem = await db.query(
        "INSERT INTO items (date, name, quantity, distance) values ($1, $2, $3, $4) RETURNING *",
        [new Date(date + "T23:20:00Z"), name, quantity, distance]
      );
      res.json(newItem.rows[0]);
    } catch (error) {
      res.status(500).end();
      console.log(error);
    }
  }

  static async getItems(_req: express.Request, res: express.Response) {
    try {
      const items = await db.query("SELECT * FROM items");
      res.json(items.rows);
    } catch (error) {
      res.status(500).end();
      console.log(error);
    }
  }

  static async getItem(req: express.Request, res: express.Response) {
    try {
      const { id } = req.params;
      const item = await db.query("SELECT * FROM items WHERE id = $1", [id]);
      res.json(item.rows[0]);
    } catch (error) {
      res.status(500).end();
      console.log(error);
    }
  }

  static async updateItem(req: express.Request, res: express.Response) {
    try {
      const { date, name, quantity, distance, id } = req.body;
      const item = await db.query(
        "UPDATE ITEMS set date = $1, name = $2, quantity = $3, distance = $4 WHERE id = $5 RETURNING *",
        [date, name, quantity, distance, id]
      );
      res.json(item.rows[0]);
    } catch (error) {
      res.status(500).end();
      console.log(error);
    }
  }

  static async deleteItem(req: express.Request, res: express.Response) {
    try {
      const { id } = req.params;
      const item = await db.query("DELETE FROM items WHERE id = $1", [id]);
      res.json(item.rowCount);
    } catch (error) {
      res.status(500).end();
      console.log(error);
    }
  }
}
