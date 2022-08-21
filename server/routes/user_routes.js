const express = require("express");
const router = express.Router();
const API = require("../controllers/api");

router.get("/", API.fetchAllUser);
router.get("/:id", API.fetchUserByID);
router.post("/", API.createUser);
router.patch("/:id", API.updateUser);
router.delete("/:id", API.deleteUser);

module.exports = router;
