const AbstractManager = require("./AbstractManager");

class KeywordManager extends AbstractManager {
  constructor() {
    // Call the constructor of the parent class (AbstractManager)
    // and pass the table name "item" as configuration
    super({ table: "keyword" });
  }

  // The C of CRUD - Create operation

  async create(keyword) {
    // Execute the SQL INSERT query to add a new keyword to the "keyword" table
    const [result] = await this.database.query(
      `INSERT INTO ${this.table} (title, acr, \`desc\`, content, category) VALUES (?, ?, ?, ?, ?)`,
      [
        keyword.title,
        keyword.acr,
        keyword.desc,
        keyword.content,
        keyword.category,
      ]
    );

    // Return the ID of the newly inserted item
    return result.insertId;
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all items from the "keyword" table
    const [rows] = await this.database.query(`SELECT * FROM ${this.table}`);

    // Return the array of items
    return rows;
  }

  async readByTitle(title) {
    // Execute the SQL SELECT query to retrieve one item from the "keyword" table
    const [rows] = await this.database.query(
      `SELECT * FROM ${this.table} WHERE title = ?`,
      [title]
    );

    // Return the array of item
    return rows;
  }

  async readByAcr(acr) {
    // Execute the SQL SELECT query to retrieve one item from the "keyword" table
    const [rows] = await this.database.query(
      `SELECT * FROM ${this.table} WHERE acr = ?`,
      [acr]
    );

    // Return the array of item
    return rows;
  }

  // The U of CRUD - Update operation

  async update(keyword) {
    // Execute the SQL INSERT query to add a new keyword to the "keyword" table
    const [result] = await this.database.query(
      `UPDATE ${this.table} SET title = ?, acr = ?, \`desc\` = ?, content = ?, category = ? WHERE id = ?`,
      [
        keyword.title,
        keyword.acr,
        keyword.desc,
        keyword.content,
        keyword.category,
        keyword.id,
      ]
    );

    // Return the ID of the newly inserted item
    return result.affectedRows;
  }

  // The D of CRUD - Delete operation

  async delete(id) {
    // Execute the SQL INSERT query to add a new item to the "item" table
    const [result] = await this.database.query(
      `DELETE FROM ${this.table} WHERE id = ?`,
      [id]
    );

    // Return the ID of the newly inserted item
    return result.affectedRows;
  }
}

module.exports = KeywordManager;
