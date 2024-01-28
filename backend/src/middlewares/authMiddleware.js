const argon2 = require("argon2");
const jwt = require("jsonwebtoken");

const tables = require("../tables");

// Middleware pour hasher le password dans la DB lors de l'ajout d'un utilisateur
const hashPwd = async (req, res, next) => {
  try {
    // Vérifie si le password est présent dans le corps de la requête
    if (req.body.password) {
      // Hash le password avec Argon2
      const hashedPassword = await argon2.hash(req.body.password);

      // Ecrase le password en clair par le password hashé (il le remplace) dans le corps de la requête
      req.body.password = hashedPassword;
    }
    next();
  } catch (error) {
    next(error);
  }
};

const login = async (req, res, next) => {
  try {
    // Verify if the username exist in the database
    const user = await tables.user.readByUsername(req.body.username);

    if (user) {
      // Verify if the password match with the hashed in the database
      const verified = await argon2.verify(user.password, req.body.password);

      if (verified) {
        // Create a token for open & keep the user session as logged
        const token = jwt.sign(
          { id: user.id, username: user.username },
          process.env.APP_SECRET,
          { expiresIn: "1h" }
        );
        // Respond with the Token of the user, in JSON format
        res.cookie("wiki_wilder_token", token, {
          httpOnly: true,
          maxAge: 3600000, // 1h in ms
        });
        res.status(200).send(token);
      } else {
        res.sendStatus(422);
      }
    } else {
      res.sendStatus(422);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

const verifyToken = async (req, res, next) => {
  try {
    const { token } = req.cookies;

    if (!token) {
      res.status(401).json({ error: "No token founded" });
    } else {
      const decoded = jwt.verify(token, process.env.APP_SECRET);
      const user = await tables.user.read(decoded.id);

      if (user) next();
      else res.status(401).json({ error: "The token is invalid" });
    }
  } catch (err) {
    res.status(401).json({ error: "Internal error" });
  }
};

module.exports = {
  hashPwd,
  login,
  verifyToken,
};
