const AbstractManager = require("./AbstractManager");

class PackageManager extends AbstractManager {
  constructor() {
    // Call the constructor of the parent class (AbstractManager)
    // and pass the table name "item" as configuration
    super({ table: "package" });
  }

  // The C of CRUD - Create operation

  async create(pack) {
    // Execute the SQL INSERT query to add a new package to the "package" table
    const [result] = await this.database.query(
      `INSERT INTO ${this.table} (name, description, content, category) VALUES (?, ?, ?, ?)`,
      [pack.name, pack.description, pack.content, pack.category]
    );

    // Return the ID of the newly inserted item
    return result.insertId;
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all items from the "package" table
    const [rows] = await this.database.query(`SELECT * FROM ${this.table}`);

    // Return the array of items
    return rows;
  }

  async readByName(name) {
    // Execute the SQL SELECT query to retrieve one item from the "package" table
    const [rows] = await this.database.query(
      `SELECT * FROM ${this.table} WHERE name = ?`,
      [name]
    );

    // Return the array of item
    return rows;
  }

  async readByDescription(description) {
    // Execute the SQL SELECT query to retrieve one package from the "package" table
    const [rows] = await this.database.query(
      `SELECT * FROM ${this.table} WHERE description = ?`,
      [description]
    );

    // Return the array of item
    return rows;
  }

  // The U of CRUD - Update operation

  async update(pack) {
    // Execute the SQL INSERT query to edit a package in the "package" table
    const [result] = await this.database.query(
      `UPDATE ${this.table} SET name = ?, descripiton = ?, content = ?, category = ? WHERE id = ?`,
      [pack.name, pack.description, pack.content, pack.category]
    );

    // Return the ID of the newly inserted item
    return result.affectedRows;
  }

  // The D of CRUD - Delete operation

  async delete(id) {
    const [result] = await this.database.query(
      `DELETE FROM ${this.table} WHERE id = ?`,
      [id]
    );

    return result.affectedRows;
  }
}

module.exports = PackageManager;
