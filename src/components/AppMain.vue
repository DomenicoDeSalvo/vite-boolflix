<script>
    import Card from './AppCard.vue';
    import {store} from '../store.js';

    export default{
        components:{
            Card
        },
        data(){
            return{
                store: store
            }
        }
        
    }
</script>

<template>
    <main>
        <section>
            <div class="container">
                <div class="alert" v-if="store.movies.length === 0 && store.series.length === 0">
                    Nessun prodotto trovato
                </div>
                <ul v-else class="row">
                    <Card v-for="movie in store.movies" :key="movie.id" :item="movie"/>
                    <Card v-for="serie in store.series" :key="serie.id" :item="serie"/>
                </ul>
            </div>
        </section>
    </main>
</template>

<style lang="scss" scoped>

    main{
        padding: 30px 0;
        background-color:black;
        flex-grow: 1;
    }

    .alert{
        text-align: center;
        padding-top: 60px;
    }

</style>