// Import access to database tables
const tables = require("../tables");

// The B of BREAD - Browse (Read All) operation
const browse = async (req, res, next) => {
  try {
    // Fetch all users from the database
    const users = await tables.user.readAll();

    // Respond with the users in JSON format and 200 status (OK)
    res.status(200).json(users);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The R of BREAD - Read operation
const readByUsername = async (req, res, next) => {
  try {
    // Fetch a specific user from the database based on the provided Username
    const user = await tables.user.readByUsername(req.params.username);

    // If the user is not found, respond with HTTP 404 (Not Found)
    if (user === null) {
      res.status(404).json({ error: "User not founded" });
    } else {
      // Otherwise, respond with the user in JSON format and 200 status (OK)
      res.status(200).json(user);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

const readByEmail = async (req, res, next) => {
  try {
    // Fetch a specific user from the database based on the provided Email
    const user = await tables.user.readByEmail(req.params.email);

    // If the user is not found, respond with HTTP 404 (Not Found)
    if (user === null) {
      res.status(404).json({ error: "User not founded" });
    } else {
      // Otherwise, respond with the user in JSON format and 200 status (OK)
      res.status(200).json(user);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The E of BREAD - Edit (Update) operation
// This operation is not yet implemented

// The A of BREAD - Add (Create) operation
const add = async (req, res, next) => {
  // Extract the user data from the request body
  const item = req.body;

  const existingUsername = await tables.user.readByUsername(item.username);
  const existingEmail = await tables.user.readByEmail(item.email);

  if (existingUsername && existingEmail) {
    // If username or email of the user already exist, respond with HTTP 400 (Bad Request)
    res.status(400).json({
      message:
        "Il semblerait qu'un compte soit déjà existant avec ce nom d'utilisateur et cette adresse email, essayez de vous connecter",
    });
  } else if (existingUsername) {
    res.status(400).json({ message: "Nom d'utilisateur déjà utilisé" });
  } else if (existingEmail) {
    res
      .status(400)
      .json({ message: "Cette adresse mail est déjà associé avec un compte" });
  }

  if (!existingUsername && !existingEmail) {
    try {
      // Insert the user into the database
      const insertId = await tables.user.create(item);

      // Respond with HTTP 201 (Created) and the ID of the newly inserted user
      res.status(201).json({ insertId });
    } catch (err) {
      // Pass any errors to the error-handling middleware
      next(err);
    }
  }
};

// The D of BREAD - Destroy (Delete) operation
// This operation is not yet implemented

// Ready to export the controller functions
module.exports = {
  browse,
  readByUsername,
  readByEmail,
  // edit,
  add,
  // destroy,
};
