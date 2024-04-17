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
                <h2>I nostri film</h2>
            </div>
            <div class="container">
                <ul v-if="store.movies.lenght !== 0">
                    <AppCard v-for="movie in store.movies" :key="movie.id" :item="movie"/>
                </ul>
                <div v-else>Nessun film corrisponde ai criteri di ricerca.</div>
            </div>
        </section>
    </main>
</template>

<style lang="scss" scoped>

</style>