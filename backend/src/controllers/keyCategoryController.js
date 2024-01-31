// Import access to database tables
const tables = require("../tables");

// The B of BREAD - Browse (Read All) operation
const browse = async (req, res, next) => {
  try {
    // Fetch all items from the database
    const keyCategories = await tables.keyword_category.readAll();

    // Respond with the items in JSON format
    res.json(keyCategories);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

const read = async (req, res, next) => {
  const category = req.body;
  try {
    // Fetch all items from the database
    const keyCategorie = await tables.keyword_category.readByName(category);

    // Respond with the items in JSON format
    res.json(keyCategorie);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The E of BREAD - Edit (Update) operation

// The A of BREAD - Add (Create) operation
const add = async (req, res, next) => {
  // Extract the item data from the request body
  const pack = req.body;

  try {
    // Insert the item into the database
    const insertId = await tables.keyword_category.create(pack);

    // Respond with HTTP 201 (Created) and the ID of the newly inserted item
    res.status(201).json({ insertId });
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The D of BREAD - Destroy (Delete) operation

const destroy = async (req, res, next) => {
  // Extract the item data from the request body
  const pack = req.params.id;

  try {
    // Insert the item into the database
    const affectedRows = await tables.keyword_category.delete(pack);

    res.status(201).json({ affectedRows });
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// Ready to export the controller functions
module.exports = {
  browse,
  read,
  // edit,
  add,
  destroy,
};
