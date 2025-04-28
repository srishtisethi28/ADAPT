// controllers/resourceController.js
import { Resource } from "../models/resourceModel.js";

// Add a new resource
export const createResource = async (req, res) => {
    try {
        const resource = new Resource(req.body);
        await resource.save();
        res.status(201).json(resource);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get all resources
export const getAllResources = async (req, res) => {
    try {
        const resources = await Resource.find();
        res.json(resources);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get a single resource by id
export const getResourceById = async (req, res) => {
    try {
        const resource = await Resource.findById(req.params.id);
        if (!resource) {
            return res.status(404).json({ message: "Resource not found" });
        }
        res.json(resource);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Delete a resource
export const deleteResource = async (req, res) => {
    try {
        const resource = await Resource.findByIdAndDelete(req.params.id);
        if (!resource) {
            return res.status(404).json({ message: "Resource not found" });
        }
        res.json({ message: "Resource deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
