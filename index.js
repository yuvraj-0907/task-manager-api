const express = require('express');
const app = express();

app.use(express.json());

let tasks = [];
let id = 1;

// Create Task
app.post('/tasks', (req, res) => {
    const { title, description } = req.body;

    if (!title) {
        return res.status(400).json({ error: "Title is required" });
    }

    const newTask = {
        id: id++,
        title,
        description: description || "",
        status: "pending",
        createdAt: new Date()
    };

    tasks.push(newTask);
    res.status(201).json(newTask);
});

// Get All Tasks
app.get('/tasks', (req, res) => {
    res.json(tasks);
});

// Get Task by ID
app.get('/tasks/:id', (req, res) => {
    const task = tasks.find(t => t.id == req.params.id);

    if (!task) {
        return res.status(404).json({ error: "Task not found" });
    }

    res.json(task);
});

// Update Task
app.put('/tasks/:id', (req, res) => {
    const task = tasks.find(t => t.id == req.params.id);

    if (!task) {
        return res.status(404).json({ error: "Task not found" });
    }

    const { title, description } = req.body;

    if (title) task.title = title;
    if (description) task.description = description;

    res.json(task);
});

// Mark Done
app.patch('/tasks/:id/done', (req, res) => {
    const task = tasks.find(t => t.id == req.params.id);

    if (!task) {
        return res.status(404).json({ error: "Task not found" });
    }

    task.status = "done";
    res.json(task);
});

// Delete Task
app.delete('/tasks/:id', (req, res) => {
    const index = tasks.findIndex(t => t.id == req.params.id);

    if (index === -1) {
        return res.status(404).json({ error: "Task not found" });
    }

    tasks.splice(index, 1);
    res.json({ message: "Task deleted" });
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});