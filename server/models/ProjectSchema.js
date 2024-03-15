const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({

    id: {
        type: Number,
        unique: true
    },
    title: {
        type: String,
        required: true,
        index: true
    },
    featured: {
        type: Boolean,
        default: false
    },
    tech: {
        type: String,
    },
    file: {
        type: String,
        default: "https://res.cloudinary.com/akshay-bisht-dev/image/upload/v1705844773/portfolio-projects/default-project-api-image.webp"
    },
    url: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
});

const Projects = new mongoose.model("Project", projectSchema);
module.exports = Projects;