const User = require('../models/users');
const Event = require('../models/events');

module.exports = class API {
    static async fetchAllUser(req, res) {
        try {
            const users = await User.find();
            res.status(200).json(users);
        } catch (err) {
            res.status(404).json({ message: err.message })
        }
    }

    static async fetchUserByID(req, res) {
        const id = req.params.id;
        try {
            const user = await User.findById(id);
            res.status(200).json(user);
        } catch (err) {
            res.status(404).json({ message: err.message });
        }
    }

    static async createUser(req, res) {
        const user = req.body;
        try {
            await User.create(user);
            res.status(201).json({ message: 'New user added' });
        } catch (err) {
            res.status(400).json({ message: err.message });
        }
    }

    static async updateUser(req, res) {
        const id = req.params.id;
        const newUser = req.body;
        try {
            await User.findByIdAndUpdate(id, newUser);
            res.status(200).json({ message: "User with id: " + id + " has been updated" });
        } catch (err) {
            res.status(404).json({ message: err.message });
        }
    }

    static async deleteUser(req, res) {
        const id = req.params.id;
        try {
            const result = await User.findByIdAndDelete(id);
            res.status(200).json({ message: "User with id: " + id + " has been deleted" });
        } catch (err) {
            res.status(404).json({ message: err.message });
        }
    }

    static async fetchAllEventsByUserId(req, res) {
        const id = req.params.id;
        try {
            const events = await Event.find({ user_id: id });
            res.status(200).json(events);
        } catch (err) {
            res.status(404).json({ message: err.message });
        }
    }

    static async createEvent(req, res) {
        const event = req.body;
        try {
            await Event.create(event);
            res.status(201).json({ message: 'New event has been added' });
        } catch (err) {
            res.status(400).json({ message: err.message });
        }
    }

    static async updateEvent(req, res) {
        const id = req.params.id;
        const newEvent = req.body;
        try {
            await Event.findByIdAndUpdate(id, newEvent);
            res.status(200).json({ message: "Event with id: " + id + " has been updated\n" + newEvent });
        } catch (err) {
            res.status(404).json({ message: err.message });
        }
    }

    static async deleteEvent(req, res) {
        const id = req.params.id;
        try {
            const result = await Event.findByIdAndDelete(id);
            res.status(200).json({ message: "Event with id: " + id + " has been deleted" });
        } catch (err) {
            res.status(404).json({ message: err.message });
        }
    }
};