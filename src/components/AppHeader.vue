<script>
    import {store} from '../store.js';
    import axios from 'axios';
    export default {
        data(){
            return{
                inputValue:'',
                query:''

            }
        },
        
        methods:{
            fetchData(){
                axios.get('https://api.themoviedb.org/3/search/movie',{
                    params:{
                        api_key: '90d34bf2642e90109d9e5d613f99a3a9',
                        query:this.inputValue
                    }
                }).then((res)=>{
                    store.movies = res.data.results
                })
            }
        }
        
    }
</script>

<template>
    <header>
        <nav class="container">
            <div class="row">
                <ul class="nav__list">
                    <li>robe</li>
                    <li>robe</li>
                    <li>robe</li>
                    <li>robe</li>
                </ul>
                <h2>Boolflix</h2>
                <div>
                    <input v-model="inputValue" type="search" placeholder="Cerca film o serie">
                    <button @click="fetchData">Cerca</button>
                </div>
            </div>
        </nav>
    </header>
</template>

<style lang="scss" scoped>
    .nav__list{
        display: flex;
        align-items: center;
        gap: 6px;

        li{
            cursor: pointer;
        }
    }

    h2{
        cursor: pointer;
    }

    nav::after{
       
    }

</style>