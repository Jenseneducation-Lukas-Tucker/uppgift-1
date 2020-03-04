<template>
    <section class="card-stack">
        <card v-for="card in cards" :key="card.id"
        v-bind:card="card"
        v-on:click.native="changeCard(card)"/>
    </section>
</template>

<script>
import Card from '@/components/Card'
    export default {
        props:{
            card: Object
        },
        components:{
            Card
        },
        methods:{
            changeCard(card){
                this.$emit("changeCard", card)
            }
            
        },
        computed: {
            cards() {
                return this.$root.$data.cards;
            }
        }


    }
</script>

<style lang="scss">
.card-stack {
    margin: 2rem 0 12rem;
    display: grid;
    grid-auto-rows: 4rem;
    .card{
        overflow: hidden;
        transform: scale(1);
    }
}

</style>