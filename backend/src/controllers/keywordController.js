// Import access to database tables
const tables = require("../tables");

// The B of BREAD - Browse (Read All) operation
const browse = async (req, res, next) => {
  try {
    // Fetch all items from the database
    const keywords = await tables.keyword.readAll();

    // Respond with the items in JSON format
    res.json(keywords);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

const browseCatId = async (req, res, next) => {
  try {
    // Fetch all items from the database
    const keywords = await tables.keyword.readAllWithId();

    // Respond with the items in JSON format
    res.json(keywords);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The R of BREAD - Read operation
const read = async (req, res, next) => {
  try {
    // Fetch a specific item from the database based on the provided ID
    const keyword = await tables.keyword.readByAcr(req.params.acronyme);

    // If the item is not found, respond with HTTP 404 (Not Found)
    // Otherwise, respond with the item in JSON format
    if (keyword[0] === null) {
      res.sendStatus(404);
    } else {
      res.json(keyword[0]);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The E of BREAD - Edit (Update) operation

const edit = async (req, res, next) => {
  // Extract the item data from the request body
  const keyword = req.body;

  try {
    const [categoryId] = await tables.keyword_category.readByName(
      keyword.category
    );
    if (categoryId) {
      keyword.category = categoryId.id;
      const affectedRows = await tables.keyword.update(keyword);

      // Respond with HTTP 201 (Created) and the ID of the newly inserted item
      res.status(201).json({ affectedRows });
    } else {
      res.sendStatus(401);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The A of BREAD - Add (Create) operation
const add = async (req, res, next) => {
  // Extract the item data from the request body
  const keyword = req.body;

  try {
    const [categoryId] = await tables.keyword_category.readByName(
      keyword.category
    );
    if (categoryId) {
      keyword.category = categoryId.id;
      const insertId = await tables.keyword.create(keyword);

      // Respond with HTTP 201 (Created) and the ID of the newly inserted item
      res.status(201).json({ insertId });
    } else {
      res.sendStatus(401);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The D of BREAD - Destroy (Delete) operation

const destroy = async (req, res, next) => {
  // Extract the item data from the request body
  const keyword = req.params.id;

  try {
    // Insert the item into the database
    const affectedRows = await tables.keyword.delete(keyword);

    res.status(201).json({ affectedRows });
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// Ready to export the controller functions
module.exports = {
  browse,
  browseCatId,
  read,
  edit,
  add,
  destroy,
};
