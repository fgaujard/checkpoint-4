// Import access to database tables
const tables = require("../tables");

// The B of BREAD - Browse (Read All) operation
const browse = async (req, res, next) => {
  try {
    // Fetch all items from the database
    const keywords = await tables.basics.readAll();

    // Respond with the items in JSON format
    res.json(keywords);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

const read = async (req, res, next) => {
  const { name } = req.params;

  try {
    // Fetch all items from the database
    const basic = await tables.basics.readByName(name);

    // Respond with the items in JSON format
    res.status(201).json(basic[0]);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

const edit = async (req, res, next) => {
  // Extract the item data from the request body
  const basic = req.body;

  try {
    const affectedRows = await tables.basics.update(basic);

    // Respond with HTTP 201 (Created) and the ID of the newly inserted item
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
  // add,
  // destroy,
};
