<template>
    <vue-app>
        <Navbar/>
        <v-main>
            <router-view></router-view>  
        </v-main>
    </vue-app>
</template>

<script>
import Navbar from '../components/navbar.vue';
export default {
    components:{
        Navbar,
    }
}
</script>

<style>

</style>