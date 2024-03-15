const express = require("express");
const router = express.Router();
const { addProject, allProjects, updateProject, deleteProject } = require("../controllers/products");

router.post("/project/new", addProject);
router.get("/projects", allProjects);
router.put("/project/:id", updateProject);
router.delete("/project/:id", deleteProject);

module.exports = router;