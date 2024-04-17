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
                <ul v-if="store.movies.length !== 0 && store.series.length !== 0">
                    <Card v-for="movie in store.movies" :key="movie.id" :item="movie"/>
                    <Card v-for="serie in store.series" :key="serie.id" :item="serie"/>
                </ul>
                <li v-else>Nessun prodotto trovato</li>
            </div>
        </section>
    </main>
</template>

<style lang="scss" scoped>

</style>