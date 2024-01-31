const jwt = require("jsonwebtoken");
// Import access to database tables
const tables = require("../tables");

// The B of BROWSE - read all
const browse = async (req, res, next) => {
  try {
    const favs = await tables.keyword_fav.readAll();

    res.json(favs);
  } catch (err) {
    next(err);
  }
};

// The R of READ - read one
const readById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { wiki_wilder_js_token: token } = req.cookies;

    if (token) {
      const user = jwt.verify(token, process.env.APP_SECRET);

      if (user) {
        const [result] = await tables.keyword_fav.readUserFav(id, user.id);

        if (result) {
          res.status(200).json(result);
        } else {
          res.sendStatus(404);
        }
      }
    } else {
      res.sendStatus(404);
    }
  } catch (err) {
    next(err);
  }
};

// The E of BREAD - Edit (Update) operation
//  This operation is not yet implemented

// The A of BREAD - Add (Create) operation
const add = async (req, res, next) => {
  // Extract the user data from the request body
  try {
    const { id } = req.body;
    const { wiki_wilder_js_token: token } = req.cookies;

    if (token) {
      const user = jwt.verify(token, process.env.APP_SECRET);

      if (user) {
        const insertId = await tables.keyword_fav.create(id, user.id);
        if (insertId) res.status(201).json({ insertId });
      }
    }
  } catch (err) {
    next(err);
  }
};

// The D of BREAD - Destroy (Delete) operation

const destroy = async (req, res, next) => {
  // Extract the item data from the request body
  try {
    const { id } = req.params;
    const { wiki_wilder_js_token: token } = req.cookies;

    if (token) {
      const user = jwt.verify(token, process.env.APP_SECRET);

      if (user) {
        const insertId = await tables.keyword_fav.delete(id, user.id);
        if (insertId) res.status(201).json({ insertId });
      }
    }
  } catch (err) {
    next(err);
  }
};

// Ready to export the controller functions
module.exports = {
  browse,
  readById,
  // edit,
  add,
  destroy,
};
