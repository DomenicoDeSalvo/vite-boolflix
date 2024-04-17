<script>
    export default {
        props:{
            item:{
                type:Object,
                required: true
            }
        },
                
    }
</script>

<template>
    <li class="col-4">
        <div>
            <div><img :src="`https://image.tmdb.org/t/p/w342${item.poster_path}`" alt="Anteprima non disponibile"></div>
            <div>nome{{ item.title }}</div>
            <div v-if="item.title !== item.original_title">originale{{ item.original_title }}</div>
            <div><img :src="item.original_language" :alt=item.original_language></div>
            <div>voto{{ item.vote_average }}</div>
        </div>
    </li>
</template>

<style lang="scss" scoped>

</style>