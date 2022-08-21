<template>
    <div>
        <div class="mt-4 mb-4 text-center">
            <h1>Add user</h1>
        </div>
        <div class="container d-flex flex-column justify-content-center">
            <form @submit.prevent="handleSubmitForm">
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
                        <router-link to="/"><button type="button"
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
import axios from "axios";

export default {
    data() {
        return {
            user: {
                name: '',
                surname: '',
                email: '',
                phone: ''
            }
        }
    },
    methods: {
        handleSubmitForm() {
            const url = '/api/user';
            axios.post(url, this.user).then(() => {
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
