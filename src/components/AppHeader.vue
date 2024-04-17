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
            //Funzione per recuperare film e serie dal catalogo
            fetchData(){
                //film
                axios.get('https://api.themoviedb.org/3/search/movie',{
                    params:{
                        api_key: '90d34bf2642e90109d9e5d613f99a3a9',
                        query:this.inputValue
                    }
                }).then((res)=>{
                    store.movies  = res.data.results
                    store.movies.forEach(element =>{
                        if(element.original_language === 'en'){
                            element.original_language = "/public/united-kingdom.png"
                        } else if (element.original_language === 'it'){
                            element.original_language = "/public/italy.png"
                        } else if (element.original_language === 'es'){
                            element.original_language = "/public/spain.png"
                        }
                    })
                })
                //serie
                axios.get('https://api.themoviedb.org/3/search/tv',{
                    params:{
                        api_key: '90d34bf2642e90109d9e5d613f99a3a9',
                        query:this.inputValue
                    }
                }).then((res)=>{
                    store.series = res.data.results
                    //Funzione che cambia il nome delle proprietà delle serie in modo tale che possano essere mostrate nelle card senza problemi.
                    store.series.forEach(element => {
                        element.title = element.name;
                        element.original_title = element.original_name;
                        delete element.name, element.original_name;
                        //Ad alcune lingue sono sostituite le bandiere corrispondenti
                        if(element.original_language === 'en'){
                            element.original_language = "/public/united-kingdom.png"
                        } else if (element.original_language === 'it'){
                            element.original_language = "/public/italy.png"
                        } else if (element.original_language === 'es'){
                            element.original_language = "/public/spain.png"
                        }
                    });
                })
            },


            // textToFlag(array){
            //     for(i = 0; i < array.length; i++){
            //         if(array.original_language )
            //     }
            // }

            
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
                    <input @keyup.enter="fetchData" v-model="inputValue" type="search" placeholder="Cerca film o serie">
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