<template>
    <div id="app">
        <header
            class="d-flex flex-column justify-content-between flex-md-row align-items-center p-3 px-md-4 mb-3 bg-dark border-bottom box-shadow">
            <h5 class="my-0 font-weight-normal text-white font-weight-bold">Test work</h5>
            <nav class="my-2 my-md-0 mr-md-3">
                <a class="p-2 text-white" href="#">Main page</a>
                <a class="p-2 text-white" href="#">Add new user</a>
                <a class="p-2 text-white" href="#">About author</a>
            </nav>
            
        </header>
        <router-view />
    </div>

</template>