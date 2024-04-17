<script>
    export default {
        props:{
            item:{
                type:Object,
                required: true
            }
        }
        
    }
</script>

<template>
    <li>
        <div>
            <div>{{ item.title }}</div>
            <div>{{ item.original_title }}</div>
            <div>{{ item.original_language }}</div>
            <div>{{ item.vote_average }}</div>
        </div>
    </li>
</template>

<style lang="scss" scoped>

</style>