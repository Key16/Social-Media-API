const router = require("express").Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
  updateThought,
  //   deleteApplication,
  //   addTag,
  //   removeTag,
} = require("../../controllers/thoughtController");

// /api/thoughts
router.route("/").get(getThoughts).post(createThought);

// /api/thoughts/:thoughtId
router.route("/:thoughtId").get(getSingleThought).put(updateThought);
//   .delete(deleteApplication);

// // /api/thoughts/:thoughtId/tags
// router.route("/:thoughtId/tags").post(addTag);

// // /api/thoughts/:thoughtId/tags/:tagId
// router.route("/:applicationId/tags/:tagId").delete(removeTag);

module.exports = router;
