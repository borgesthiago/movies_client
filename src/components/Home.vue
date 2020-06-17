<template>

    <div class="home">

        <div>
            <b-navbar toggleable="lg" type="dark" variant="info">
                <b-navbar-brand href="#">{{ $t('title') }}</b-navbar-brand>
                <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
                <b-collapse id="nav-collapse" is-nav>
                    <b-navbar-nav class="ml-auto">
                        <b-nav-form>
                            <b-form-input size="sm" class="mr-sm-2" v-model="searchMovie"></b-form-input>
                            <b-button size="sm" class="my-2 my-sm-0" @click="getMovies">{{ $t('search') }}</b-button>
                        </b-nav-form>
                        <b-nav-item-dropdown text="Lang" right>
                            <b-dropdown-item href="#" @click="setLocale('en')">
                                <flag iso="us"></flag>
                                EN
                            </b-dropdown-item>
                            <b-dropdown-item href="#" @click="setLocale('pt')">
                                <flag iso="pt"></flag>
                                PT
                            </b-dropdown-item>
                        </b-nav-item-dropdown>
                    </b-navbar-nav>
                </b-collapse>
            </b-navbar>
        </div>

        <b-container>
            <div v-for="movies in moviesList">
                <br/>
                <h2>{{ $t('body') }}</h2>
                <br/>
                <div v-for="movie in movies">
                    <b-row>
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
        components: {
            "movie-card": MoviebCard
        },
        data() {
            return {
                searchMovie: '',
                moviesList: []
            };
        },
        props: {title: String, search: String},
        methods: {
            getMovies() {
                axios('http://172.17.0.1/movies/?s=' + this.searchMovie).then(res => {
                    this.moviesList = res.data;
                    this.searchMovie = '';
                })
            },
            setLocale(locale) {
                this.$i18n.locale = locale
            }
        }
    }
</script>

<style lang="scss" scoped></style>