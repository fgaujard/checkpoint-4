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
      `INSERT INTO ${this.table} (acronyme, name, description, content, category_id) VALUES (?, ?, ?, ?, ?)`,
      [
        keyword.acronyme,
        keyword.name,
        keyword.description,
        keyword.content,
        keyword.category,
      ]
    );

    // Return the ID of the newly inserted item
    return result.insertId;
  }

  async readAll() {
    const [rows] = await this.database.query(`
    SELECT keyword.id, keyword.acronyme, keyword.name, keyword.description, keyword.content, keyword_category.name as category
    FROM ${this.table}
    LEFT JOIN keyword_category ON keyword.category_id = keyword_category.id
    ORDER BY keyword.acronyme ASC
  `);
    return rows;
  }

  async readAllWithId() {
    const [rows] = await this.database.query(`SELECT * FROM ${this.table}`);
    return rows;
  }

  // The R of CRUD - Create operation

  async readByAcr(acronyme) {
    // Execute the SQL SELECT query to retrieve one item from the "keyword" table
    const [rows] = await this.database.query(
      `
    SELECT keyword.id, keyword.acronyme, keyword.name, keyword.description, keyword.content, keyword_category.name as category
    FROM ${this.table}
    LEFT JOIN keyword_category ON keyword.category_id = keyword_category.id
    WHERE acronyme = ?`,
      [acronyme]
    );

    // Return the array of item
    return rows;
  }

  // The U of CRUD - Update operation

  async update(keyword) {
    // Execute the SQL INSERT query to add a new keyword to the "keyword" table
    const [result] = await this.database.query(
      `UPDATE ${this.table} SET acronyme = ?, name = ?, description = ?, content = ?, category_id = ? WHERE id = ?`,
      [
        keyword.acronyme,
        keyword.name,
        keyword.description,
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
