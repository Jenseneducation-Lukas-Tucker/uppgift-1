<template>
  <div class="home">
    <header class="top">
      <Top msg="E-Wallet"></Top>
      <card v-bind:card="card"></card>
      <CardStack v-bind:card="card" v-on:changeCard="changeCard"></CardStack>
      <router-link to="/addcard" class="poop">Add New Card</router-link>
    </header>
  </div>
</template>

<script>
// @ is an alias to /src
import Top from '@/components/Top.vue'
import Card from '@/components/Card.vue'
import CardStack from '@/components/CardStack.vue'
export default {
  name: 'Home',
  components: {
Top,
Card,
CardStack,
  },
  data(){
    return{
      card: {
        cardholder: "Lukas Tucker",
        number: "1337133713371337",
        month: "1",
        year:"22",
        vendor: "evil",
        cvv: "159",
        color:"#ccc"
      }
    }
  },
  methods:{
    changeCard(card){
      this.card= card
    }
  },
  computed:{
    cards(){
      return this.$root.$data.cards
    }
  }
}
</script>
<style lang="scss">
#app{
    font-family: Avenir,Helvetica,Arial,sans-serif;
    font-family: PT Mono,monospace;
    padding: 1rem;
    height: 100vh;
    max-width: 24rem;
    margin: 0 auto;
    box-sizing: border-box;
}
main{
  display: block;
}
.top {
    display: flex;
    flex-direction: column;
    text-transform: uppercase;
  p {
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-size: .8rem;
    font-weight: 600;
    color: rgba(0,0,0,.4);
    padding: .25rem;
}
  h1, p {
    
    margin: 0;
}
}
.poop, button {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 4rem;
    font-size: 1.2rem;
    text-transform: uppercase;
    font-weight: 700;
    text-decoration: none;
    color: #000;
    border: .125rem solid #000;
    box-sizing: border-box;
    border-radius: .5rem;
    margin: 2rem 0;
    width: 100%;
    &:hover {
      color: white;
      cursor: pointer;
      background-color: #000;
    
}
}
</style>