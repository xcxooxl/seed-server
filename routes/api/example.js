import { getExample, getExampleById } from "@controllers/exampleController";
import express from "express";
import { validateFactory, validations } from "@validation/index";

const router = express.Router();

router.get("/", getExample);
// router.get("/:id", validateFactory(validations.getExampleById, "params"), getExampleById);
router.get("/:id", getExampleById);
module.exports = router;
