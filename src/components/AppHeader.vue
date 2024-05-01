<script>
    import {store} from '../store.js';
    import axios from 'axios';
    export default {
        data(){
            return{
                inputValue:'mandalorian',
                query:'',
                navBar:[
                    {
                        text:'Profilo',
                        href:'#'
                    },
                    {
                        text:'I miei preferiti',
                        href:'#'
                    },
                    {
                        text:'Cronologia',
                        href:'#'
                    },
                ]

            }
        },
        
        methods:{
            //Funzione per recuperare film e serie dal catalogo
            fetchData(){
                //film
                axios.get('https://api.themoviedb.org/3/search/movie',{
                    params:{
                        api_key: '90d34bf2642e90109d9e5d613f99a3a9',
                        query:this.inputValue
                    }
                }).then((res)=>{
                    store.movies = res.data.results.map((el) => {
                        el.vote = Math.ceil(el.vote_average / 2)
                        return el
                    })
                })
                //serie
                axios.get('https://api.themoviedb.org/3/search/tv',{
                    params:{
                        api_key: '90d34bf2642e90109d9e5d613f99a3a9',
                        query:this.inputValue
                    }
                }).then((res)=>{
                    //Funzione che cambia il nome delle proprietà delle serie in modo tale che possano essere mostrate nelle card senza problemi.
                    store.series = res.data.results.map((el) => {
                        el.title = el.name
                        el.original_title = el.original_name
                        el.vote = Math.ceil(el.vote_average / 2)
                        return el
                    })
                })

                this.inputValue = ''
            },
        },
        created(){
            this.fetchData()
        }
        
    }
</script>

<template>
    <header>
        <nav class="container">
            <div class="row">
                <ul class="nav__list col-4">
                    <li v-for="(nav, i) in navBar" :key="i">{{ nav.text }}</li>
                </ul>
                <h2 class="col-4 logo">Boolflix</h2>
                <div class="col-4 search_bar">
                    <input @keyup.enter="fetchData" v-model="inputValue" type="search" placeholder="Cerca film o serie">
                </div>
            </div>
        </nav>
    </header>
</template>

<style lang="scss" scoped>

    header{
        background-color: black;
        padding: 20px 0;

        &::after{
        content: '';
        display: block;
        border: 1px solid red;
        width: 100%;
       
    }
    }

    .nav__list{
        display: flex;
        align-items: center;
        gap: 20px;

        li{
            cursor: pointer;
        }
    }

    .logo{
        cursor: pointer;
        color: red;
        text-align: center;
        font-size: 40px;
    }

    .search_bar{
        text-align: end;

        input{
            height: 30px;
            width: 250px;
            padding: 0 12px;
            &:focus-visible{
                outline: none;
            }
        }
    }

</style>