const AbstractManager = require("./AbstractManager");

class BasicsManager extends AbstractManager {
  constructor() {
    super({ table: "basics" });
  }

  async readAll() {
    const [rows] = await this.database.query(`SELECT * FROM ${this.table}`);

    return rows;
  }

  async readByName(name) {
    const [rows] = await this.database.query(
      `SELECT * FROM ${this.table} WHERE name = ?`,
      [name]
    );

    return rows;
  }

  async update(basic) {
    console.info(basic);
    // Execute the SQL INSERT query to add a new item to the "item" table
    const [result] = await this.database.query(
      `UPDATE ${this.table} SET description = ?, content = ? WHERE name = ?`,
      [basic.description, basic.content, basic.name]
    );

    // Return the ID of the newly inserted item
    return result.affectedRows;
  }
}
module.exports = BasicsManager;
