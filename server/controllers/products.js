const Projects = require("../models/ProjectSchema");
const addProject = async (req, res) => {
    const create = await Projects.create(req.body);
    res.status(200).json({
        success: true,
        create
    })
}
const allProjects = async (req, res) => {
    const read = await Projects.find();
    res.status(200).json({
        success: true,
        read
    })
}

const updateProject = async (req, res) => {
    let update = await Projects.findById(req.params.id);

    if (!update) {
        return res.status(500).json({
            success: false,
            message: "Project Not Found!"
        })
    }

    update = await Projects.findByIdAndUpdate(req.params.id, req.body, { new: true, useFindAndModify: true });

    res.status(200).json({
        success: true,
        update
    })
}

const deleteProject = async (req, res) => {
    let deleteProject = await Projects.findById(req.params.id);

    if (!deleteProject) {
        return res.status(500).json({
            success: false,
            message: "Project not Found!"
        });
    }

    await deleteProject.deleteOne();

    res.status(200).json({
        success: true,
        message: "Project deleted successfully!"
    })
}
module.exports = { addProject, allProjects, updateProject, deleteProject };