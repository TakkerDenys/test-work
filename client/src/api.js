import axios from "axios";
const userUrl = "/api/user";
const eventUrl = "/api/event";

export default class API {
    static async getUserByID(id) {
        const res = await axios.get(`${userUrl}/${id}`)
        return res.data;
    };
    static async deleteUser(id) {
        const res = await axios.delete(`${userUrl}/${id}`);
        return res.data;
    };
    static async getUserEventById(id) {
        const res = await axios.get(`${eventUrl}/${id}`);
        return res.data;
    };
}