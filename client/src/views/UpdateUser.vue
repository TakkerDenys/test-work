<template>
    <div>
        <div class="mt-4 mb-4 text-center">
            <h1>Update user</h1>
        </div>
        <div class="container d-flex flex-column justify-content-center">
            <form @submit.prevent="handleUpdateForm">
                <div class="form-group">
                    <label class="h4">Name:</label>
                    <input type="text" class="form-control" v-model="user.name" required>
                </div>
                <div class="form-group">
                    <label class="h4">Surname:</label>
                    <input type="text" class="form-control" v-model="user.surname" required>
                </div>
                <div class="form-group">
                    <label class="h4">Email:</label>
                    <input type="email" class="form-control" v-model="user.email" required>
                </div>
                <div class="form-group">
                    <label class="h4">Phone number:</label>
                    <input type="number" class="form-control" v-model="user.phone" required>
                </div>
                <div class="form-group">
                    <div class="text-center mt-4 d-flex flex-row justify-content-center">
                        <router-link :to="{ name: 'user', params: { id: user._id } }"><button type="button"
                                class="btn btn-primary btn-lg pl-5 pr-5 pt-3 pb-3 ml-3 mr-3"><span
                                    class="h3">Back</span></button>
                        </router-link>
                        <button type="submit" class="btn btn-success btn-lg pl-5 pr-5 pt-3 pb-3 ml-3 mr-3"><span
                                class="h3">Add new user</span></button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import API from "../api";
import axios from "axios";

export default {
    data() {
        return {
            user: {},
        };
    },
    async created() {
        const response = await API.getUserByID(this.$route.params.id);
        this.user = response;
    },
    methods: {
        handleUpdateForm() {
            const url = '/api/user/' + this.$route.params.id;

            axios.patch(url, this.user).then(() => {
                this.$router.push('/')
                this.user = {
                    name: '',
                    surname: '',
                    email: '',
                    phone: ''
                }
            }).catch(error => {
                console.log(error)
            });
        }
    }
}
</script>
