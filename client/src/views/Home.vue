<template>
    <div>
        <div class="mt-4 mb-4 text-center">
            <h1>Users list</h1>
        </div>
        <div class="container table-responsive d-flex justify-content-center">
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">User name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Phone number</th>
                        <th scope="col">Events Count</th>
                        <th scope="col">Next event date</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="user in users['data']" :key="user._id">
                        <td>
                            <router-link class="text-reset" :to="{ name: 'user', params: { id: user._id } }">
                                {{ user.name + " " + user.surname }}</router-link>
                        </td>
                        <td>{{ user.email }}</td>
                        <td>{{ user.phone }}</td>
                        <td><strong class="text-danger">NULL</strong></td>
                        <td><strong class="text-danger">NULL</strong></td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="text-center mt-4">
            <router-link class="nav-link" to="/add-user"><button type="button"
                    class="btn btn-success btn-lg pl-5 pr-5 pt-3 pb-3 ml-3 mr-3"><span class="h3">Add new
                        user</span></button></router-link>
        </div>
    </div>
</template>

<script>
import axios from "axios";
const url = "/api/user/";
import API from "../api";

export default {
    name: 'Home',
    data() {
        return {
            users: [],
            event: {}
        };
    },
    async created() {
        axios
            .get(url)
            .then(response => (this.users = response))
            .then(() => {
                API.getUserEventById(this.users['data'][0]._id)
                    .then(resp => (this.event = resp));
            })
            .catch(console.log);
    }
};
</script>
