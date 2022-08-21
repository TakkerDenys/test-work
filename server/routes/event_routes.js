const express = require("express");
const router = express.Router();
const API = require("../controllers/api");

router.get("/:id", API.fetchAllEventsByUserId);
router.post("/", API.createEvent);
router.patch("/:id", API.updateEvent);
router.delete("/:id", API.deleteEvent);

module.exports = router;