// routes/resourceRoute.js
import express from "express";
import { createResource, getAllResources, getResourceById, deleteResource } from "../controllers/resourceController.js";

const router = express.Router();

// Create a resource
router.post("/", createResource);

// Get all resources
router.get("/", getAllResources);

// Get single resource
router.get("/:id", getResourceById);

// Delete resource
router.delete("/:id", deleteResource);

export default router;
