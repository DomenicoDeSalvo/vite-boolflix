<script>
    export default {
        data(){
            return{
                inputValue:''

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
                    <button>Cerca</button>
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