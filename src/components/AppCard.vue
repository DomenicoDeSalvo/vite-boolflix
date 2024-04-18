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
    <div class=" col-auto col-4">
        <div class="card">
            <!-- Viene mostrato il poster dell'opera, nel caso non ci fossero immagini disponibili verrà mostrato un poster bianco. -->
            <div class="card__header">
                <img v-if="item.poster_path === null" class="poster" src="/public/Non disponibile.png" alt="">
                <img v-else class="poster" :src="`https://image.tmdb.org/t/p/w342${item.poster_path}`" alt="">
                <!-- Altre informazioni sull'opera -->
                <div class="card__info">
                    <ul>
                        <li>
                            <span class="card__title">Titolo: </span>
                            <span>{{ item.title }}</span>
                        </li>
                        <!-- Passando con il cursore sul poster verrano mostrate informazioni sull'opera -->
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
                        <!-- Viene mostrata anche la trama dell'opera, se non dovesse essere presente verrà mostrato "Non disponibile", se dovesse essere troppo lunga verrà tagliata dopo 500 caratteri. -->
                        <li>
                            <span class="card__title">Trama: </span>
                            <span v-if="item.overview === ''">Non disponibile</span>
                            <span v-else>{{ item.overview.length > 500 ? item.overview.slice(0,500)+"..." : item.overview }}</span>
                        </li>
                    </ul>
                </div>
            </div> 
        </div>
    </div>
</template>

<style lang="scss" scoped>

    .card{
        padding: 20px 0;
        text-align: center;
        position: relative;
        cursor: pointer;

        &:hover .card__info{
            display: block;
        }
    }


    .poster{
        border: 1px solid white;
    }
    .card__info{
        display: none;
        position: absolute;
        top: 20px;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 999;
        text-align: start;
        padding: 10px;
        background-color: rgba($color: #000000, $alpha: 0.7);

        li{
            padding: 6px 0;
        }
    }


    .flag{
        max-width: 20px;
    }

    .card__title{
        font-weight: 700;
    }

</style>
