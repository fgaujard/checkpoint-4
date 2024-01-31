const AbstractManager = require("./AbstractManager");

class CommentManager extends AbstractManager {
  constructor() {
    super({ table: "keyword_fav" });
  }

  async create(id, userId) {
    console.info("create", id, userId);
    const [result] = await this.database.query(
      `INSERT INTO ${this.table} (keyword_id, user_id) VALUES (?, ?)`,
      [id, userId]
    );
    return result.insertId;
  }

  async readAll() {
    const [rows] = await this.database.query(`select * from ${this.table}`);

    return rows;
  }

  async readUserFav(id, userId) {
    const [rows] = await this.database.query(
      `SELECT id FROM ${this.table} WHERE keyword_id = ? AND user_id = ?`,
      [id, userId]
    );

    return rows;
  }

  async delete(id, userId) {
    // Execute the SQL INSERT query to add a new item to the "item" table
    const [result] = await this.database.query(
      `DELETE FROM ${this.table} WHERE keyword_id = ? AND user_id = ?`,
      [id, userId]
    );

    // Return the ID of the newly inserted item
    return result.affectedRows;
  }
}
module.exports = CommentManager;
