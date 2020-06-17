<!--<template>-->
<!--<b-container>-->
<!--<h2 align="center">Movies</h2>-->
<!--<b-form inline align="center">-->
<!--<b-form-input align="center" nsize="sm" class="mr-sm-2" placeholder="Search" v-model="search"></b-form-input>-->
<!--<b-button size="sm" class="my-2 my-sm-0" @click="searchMovie">Search</b-button>-->
<!--</b-form>-->
<!--<h1>Resultado</h1>-->
<!--<b-row align-v="center">-->
<!--<div class="componente" v-for="movie in movies">-->
<!--<div v-for="teste in movie">-->
<!--<app-usuario-info v-for="t in teste" :title="t.Title"></app-usuario-info>-->
<!--</div>-->
<!--</div>-->
<!--</b-row>-->
<!--</b-container>-->
<!--</template>-->

<!--<script>-->
<!--import AppUsuarioInfo from './UsuarioInfo';-->
<!--import axios from 'axios'-->

<!--export default {-->

<!--components: { AppUsuarioInfo },-->

<!--data() {-->
<!--return {-->
<!--search: '',-->
<!--movies: [],-->
<!--title: ''-->
<!--}-->
<!--},-->

<!--methods: {-->
<!--searchMovie() {-->
<!--axios('http://172.17.0.1/movies/?s=' + this.search).then(res => {-->
<!--this.movies = res.data;-->
<!--})-->
<!--}-->
<!--}-->
<!--}-->
<!--</script>-->

<!--<style scoped>-->

<!--</style>-->

<template>
    <div class="home">

        <div>
            <b-navbar toggleable="lg" type="dark" variant="info">
                <b-navbar-brand href="#">Movie Search</b-navbar-brand>

                <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

                <b-collapse id="nav-collapse" is-nav>

                    <!-- Right aligned nav items -->
                    <b-navbar-nav class="ml-auto">
                        <b-nav-form>
                            <b-form-input size="sm" class="mr-sm-2" placeholder="Search"
                                          v-model="search"></b-form-input>
                            <b-button size="sm" class="my-2 my-sm-0" @click="searchMovie">Search</b-button>
                        </b-nav-form>

                        <b-nav-item-dropdown text="Lang" right>
                            <b-dropdown-item href="#">EN</b-dropdown-item>
                            <b-dropdown-item href="#">PT</b-dropdown-item>
                        </b-nav-item-dropdown>

                    </b-navbar-nav>
                </b-collapse>
            </b-navbar>
        </div>

        <b-container>
            <div v-for="movies in moviesList">
                <div v-for="movie in movies">
                    <b-row align-v="center">
                        <movie-card v-for="m in movie" :key="m.imdbID" :title="m.Title" :poster="m.Poster"
                                    :type="m.Type" :year="m.Year"></movie-card>
                    </b-row>
                </div>
            </div>
        </b-container>
    </div>
</template>

<script>

    import MoviebCard from "./MovieCard.vue";
    import axios from 'axios';

    export default {

        name: "home",
        components: {"movie-card": MoviebCard},
        data() {
            return {
                search: '',
                moviesList: []
            };
        },
        methods: {
            searchMovie() {
                axios('http://172.17.0.1/movies/?s=' + this.search).then(res => {
                    this.moviesList = res.data;
                    console.log(this.moviesList);
                })
            }
        }
    }
</script>

<style lang="scss" scoped></style>