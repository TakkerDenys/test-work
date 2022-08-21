<template>
    <div>
        <div class="mt-4 mb-4 text-center">
            <h1>User page</h1>
        </div>
        <div class="container">
            <p class="h4"><strong>User name: </strong>{{ user.name + " " + user.surname }}</p>
            <p class="h4"><strong>Email: </strong>{{ user.email }}</p>
            <p class="h4"><strong>Phone number: </strong>{{ user.phone }}</p>
            <p class="h4"><strong>Events count: </strong><strong class="text-danger">NULL</strong></p>
            <p class="h4"><strong>Next event date: </strong><strong class="text-danger">NULL</strong></p>
        </div>
        <div class="text-center mt-4 d-flex flex-row justify-content-center">
            <router-link to="/"><button type="button" class="btn btn-primary btn-lg pl-5 pr-5 pt-3 pb-3 ml-3 mr-3"><span
                        class="h3">Back</span></button>
            </router-link>
            <router-link :to="{ name: 'update-user', params: { id: user._id } }"><button type="button"
                    class="btn btn-warning btn-lg pl-5 pr-5 pt-3 pb-3 ml-3 mr-3"><span class="h3">Update
                        user</span></button></router-link>
            <button type="button" @click="deleteUser(user._id)"
                class="btn btn-danger btn-lg pl-5 pr-5 pt-3 pb-3 ml-3 mr-3"><span class="h3">Delete
                    user</span></button>
        </div>
    </div>
</template>

<script>
import API from "../api";

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
        async deleteUser(id) {
            const response = await API.deleteUser(id);
            this.$router.push('/');
        }
    }
}
</script>
