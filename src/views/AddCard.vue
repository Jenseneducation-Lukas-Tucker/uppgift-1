<template>
  <div class="home">
    <header class="top">
      <Top msg="Add Card"></Top>
      <p>New Card</p>
    </header>
    <Card v-bind:card="card" v-bind:class="card"></Card>
    <CardForm v-bind:card="card" @select="changeVendor"></CardForm>
  </div>
</template>

<script>
// @ is an alias to /src
import Top from '@/components/Top.vue'
import CardForm from "@/components/CardForm.vue"
import Card from "@/components/Card.vue"
export default {
  name: 'AddCard',
  components: {
Top,
CardForm,
Card
  },
  data(){
    return{
      card:{
        id: Date.now(),
        number: "XXXXXXXXXXXXXXXX",
        cardholder: "",
        month: "MM",
        year:"YY",
        vendor:"bitcoin",
        color:"#999"

      }
    }
  },
  methods:{
    changeVendor(vendor){
      if (vendor === "ninja") {
        this.card.vendor = require('@/assets/vendor-' + vendor );
      }
      if (vendor === "evil") {
        this.card.vendor = require('@/assets/vendor-' + vendor );
      }
      if (vendor === "blockchain") {
        this.card.vendor = require('@/assets/vendor-' + vendor );
      }
      if (vendor === "bitcoin") {
        this.card.vendor = require('@/assets/vendor-' + vendor);
      }
    }
  }
}
</script>

<style lang="scss" scoped >
header{
  display: block;
}
.top {
    h1 , p{
    text-align: center;
    margin: 0;
}
h1 {
    flex: 2;
    line-height: 2rem;
    font-size: 2rem;
    padding: 1.5rem 0;
}
}
</style>