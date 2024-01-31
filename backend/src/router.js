const express = require("express");

const router = express.Router();

// Define Your API Routes Here

/* ************************************************************************* */
// User & Auth
/* ************************************************************************* */

// Import userController module for handling item-related operations
const userController = require("./controllers/userController");
const AuthMiddleware = require("./middlewares/authMiddleware");

router.get("/users", userController.browse); // Route to get all Users
router.get("/users/:username", userController.readByUsername); // Route to get a specific user by Username

router.post("/register", AuthMiddleware.hashPwd, userController.add);
router.post("/login", AuthMiddleware.login); // Route to add a new user
router.get("/verify-token", AuthMiddleware.verifyToken); // Route to add a new user
router.get("/logout", AuthMiddleware.logout);

/* ************************************************************************* */
// Recap SACOD
/* ************************************************************************* */

// Import keywordController module for handling item-related operations
// const recapController = require("./controllers/recapController");

/*
router.get("/recap", recapController.browse); // Route to get a list of recaps
router.get("/recap/:title", recapController.read); // Route to get a specific recap by title
router.post("/recap-create", recapController.add); // Route to get a list of recaps
router.put("/recap-edit", recapController.edit); // Route to edit a specific recap by id
router.delete("/recap/:id", recapController.destroy); // Route to get a specific recap by title
*/

/* ************************************************************************* */
// Keywords
/* ************************************************************************* */

// Import keywordController module for handling item-related operations
const keywordController = require("./controllers/keywordController");

router.get("/keyword", keywordController.browse); // Route to get a list of keywords
router.get("/keyword-with-id", keywordController.browseCatId);
router.get("/keyword/:acronyme", keywordController.read); // Route to get a specific keyword by title
router.post("/keyword-create", keywordController.add); // Route to get a list of keywords
router.put("/keyword-edit", keywordController.edit); // Route to edit a specific keyword by id
router.delete("/keyword/:id", keywordController.destroy); // Route to get a specific keyword by title

/* ************************************************************************* */
// Keyword Category
/* ************************************************************************* */

// Import categoryController module for handling item-related operations
const keyCategoryController = require("./controllers/keyCategoryController");

router.get("/categories", keyCategoryController.browse); // Route to get a list of keywords

/* ************************************************************************* */
// Keywords
/* ************************************************************************* */

// Import keywordController module for handling item-related operations
const keyFavController = require("./controllers/keyFavController");

router.get("/keyfav", keyFavController.browse); // Route to get a list of keywords
router.get("/keyfav/:id", keyFavController.readById);
router.post("/keyfav", keyFavController.add); // Route to get a list of keywords
router.delete("/keyfav/:id", keyFavController.destroy); // Route to get a specific keyword by title

/* ************************************************************************* */
// Basics dev Web
/* ************************************************************************* */

// Import keywordController module for handling item-related operations
// const basicsController = require("./controllers/basicsController");

/* ************************************************************************* */
// Packages
/* ************************************************************************* */

// Import keywordController module for handling item-related operations
// const packageController = require("./controllers/packageController");

/*
router.get("/packages", packagesController.browse); // Route to get a list of packagess
router.get("/packages/:title", packagesController.read); // Route to get a specific packages by title
router.post("/packages-create", packagesController.add); // Route to get a list of packagess
router.put("/packages-edit", packagesController.edit); // Route to edit a specific packages by id
router.delete("/packages/:id", packagesController.destroy); // Route to get a specific packages by title
*/

/* ************************************************************************* */
// Packages Category
/* ************************************************************************* */

// Import categoryController module for handling item-related operations
// const packCategoryController = require("./controllers/packCategoryController");

// router.get("/categories", keyCategoryController.browse); // Route to get a list of keywords

/* ************************************************************************* */

module.exports = router;
