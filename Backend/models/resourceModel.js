// models/ResourceModel.js
import mongoose from "mongoose";

const resourceSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String },
    type: { type: String, enum: ["video", "article","EBook"], required: true }, // Type of resource
    link: { type: String, required: true }, // YouTube link or article URL
    thumbnail: { type: String }, // Optional thumbnail image
}, { timestamps: true });

export const Resource = mongoose.model("Resource", resourceSchema);
