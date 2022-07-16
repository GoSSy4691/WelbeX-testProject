import axios from "axios";

export default class API {
  static async createItem(date, name, quantity, distance) {
    return await axios.post(
      `${process.env.REACT_APP_API_URL}/api/item`,
      {
        date,
        name,
        quantity,
        distance,
      }
    );
  }

  static async getItems() {
    return await axios.get(`${process.env.REACT_APP_API_URL}/api/items`);
  }

  static async getItem(id) {
    return await axios.get(`${process.env.REACT_APP_API_URL}/api/item/${id}`);
  }

  static async updateItem(id, date, name, quantity, distance) {
    return await axios.put(`${process.env.REACT_APP_API_URL}/api/item`, {
      id,
      date,
      name,
      quantity,
      distance,
    });
  }

  static async deleteItem(id) {
    return await axios.delete(
      `${process.env.REACT_APP_API_URL}/api/item/${id}`
    );
  }
}
