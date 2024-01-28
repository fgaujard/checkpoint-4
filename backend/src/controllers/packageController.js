// Import access to database tables
const tables = require("../tables");

// The B of BREAD - Browse (Read All) operation
const browse = async (req, res, next) => {
  try {
    // Fetch all items from the database
    const packages = await tables.package.readAll();

    // Respond with the items in JSON format
    res.json(packages);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The R of BREAD - Read operation
const read = async (req, res, next) => {
  try {
    // Fetch a specific item from the database based on the provided ID
    const pack = await tables.package.readByTitle(req.params.name);

    // If the item is not found, respond with HTTP 404 (Not Found)
    // Otherwise, respond with the item in JSON format
    if (pack[0] === null) {
      res.sendStatus(404);
    } else {
      res.json(pack[0]);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The E of BREAD - Edit (Update) operation

const edit = async (req, res, next) => {
  // Extract the item data from the request body
  const pack = req.body;

  try {
    // Insert the item into the database
    const affectedRows = await tables.package.update(pack);

    // Respond with HTTP 201 (Created) and the ID of the newly inserted item
    res.status(201).json({ affectedRows });
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The A of BREAD - Add (Create) operation
const add = async (req, res, next) => {
  // Extract the item data from the request body
  const pack = req.body;

  try {
    // Insert the item into the database
    const insertId = await tables.package.create(pack);

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
    const affectedRows = await tables.package.delete(pack);

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
  edit,
  add,
  destroy,
};
