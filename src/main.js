import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

new Vue({
  router,
  data:()=>({
    cards: [
      {
        id:0,
        cardholder: "Lukas Tucker",
        number: "1337133713371337",
        month: "1",
        year:"22",
        vendor: "evil",
        cvv: "159"
      },
      {
        id:1,
        cardholder: "Mike Hunt",
        number: "6666666666666666",
        month: "1",
        year:"5",
        vendor: "ninja",
        cvv: "124"
      },
      {
        id: 2,
        cardholder: "Ben Dover",
        number: "0000000000000000",
        month: "12",
        year:"4",
        vendor: "ninja",
        cvv: "099",
        color:"#ccc"
      },
      {
        id:3,
        cardholder: "Hugh Jass",
        number: "1234567890123456",
        month: "3",
        year:"22",
        vendor: "blockchain",
        cvv: "541"
      },
    ]
  }),
  mounted() {
    this.$root.$on("new-card", data => {
      this.cards.push(data);
      console.log(data);
    });
  },
  render: h => h(App)
}).$mount('#app')
