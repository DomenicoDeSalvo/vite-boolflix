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
    <li class=" col-4">
        <ul>
            <!-- Viene mostrato il poster dell'opera, nel caso non ci fossero immagini disponibili verrà mostrato un poster bianco. -->
            <li v-if="item.poster_path === null">
                <img class="poster" src="/public/Non disponibile.png" alt="">
            </li>            
            <li v-else>
                <img class="poster" :src="`https://image.tmdb.org/t/p/w342${item.poster_path}`" alt="">
            </li> 
            <!-- Altre informazioni sull'opera -->
            <li>
                <span class="card__title">Titolo: </span>
                <span>{{ item.title }}</span>
            </li>
            <!-- Nel caso il titolo dovessere essere uguale al titolo originale, quest'ultimo non sarà mostrato -->
            <li v-if="item.title !== item.original_title">
                <span class="card__title">Titolo originale: </span>
                <span>{{ item.original_title }}</span>
            </li>
            <li>
                <img class="flag" :src="item.original_language" :alt=item.original_language>
            </li>
            <li>
                <span class="card__title">Valutazione: </span>
                <span>{{ item.vote_average }}</span>
            </li>
        </ul>
    </li>
</template>

<style lang="scss" scoped>
    .poster{
        border: 1px solid white;
    }

    .flag{
        max-width: 20px;
    }

    .card__title{
        font-weight: 700;
    }

</style>