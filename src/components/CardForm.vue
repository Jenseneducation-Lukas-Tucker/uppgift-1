<template>
<form class="card-form" @submit.prevent="addCard">
            <label for="number" class="col-2">Card Number</label>
            <input type="text" name="number" maxlength="16" placeholder="XXXX XXXX XXXX XXXX" 
            v-model="card.number"
            class="col-2">

            <label for="cardholder" class="col-2">Cardholder Name</label>
            <input type="text" name="cardholder" placeholder="Firstname and Lastname" 
            class="col-2 text" v-model="card.cardholder" maxlength="30" >

            <label for="month" class="col-1">Month</label>
            <label for="yesr">Year</label>

            <select name="month" class="col-1" v-model="card.month">
                <option value="01">01</option>
                <option value="02">02</option>
                <option value="03">03</option>
                <option value="04">04</option>
                <option value="05">05</option>
                <option value="06">06</option>
                <option value="07">07</option>
                <option value="08">08</option>
                <option value="09">09</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
            </select>
            <select name="month" class="col-1" v-model="card.year">
                <option value="21">21</option>
                <option value="22">22</option>
                <option value="23">23</option>
                <option value="24">24</option>
                <option value="25">25</option>
            </select>
            <label for="vendor" class="col-2">Vendor</label>

            <select name="vendor" class="col-2" 
                v-model="card.vendor" 
                @change="$emit('select', card.vendor)">
                <option value="bitcoin">Bitcoin Inc</option>
                <option value="blockchain">Blockchain Inc</option>
                <option value="evil">Evil Corp</option>
                <option value="ninja">Ninja Bank</option>
            </select>
        <button class="cta col-2">Add Card</button>
    </form>
</template>

<script>
export default {
    name: "CardForm",
props:{
    card: Object

},
methods: {
    addCard(){
        this.$root.$emit("new-card", this.card);
        this.$router.go(-1);
    },
}
}

</script>

<style lang="scss">
section{
    display: block;
}
.card-form {
    margin: 2rem 0 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0 1rem;
label {
    padding: .25rem 0;
    font-size: .7rem;
    text-transform: uppercase;
    cursor: pointer;
}
input, select {
    border: 1px solid #000;
    border-radius: .25rem;
    padding: .5rem;
    height: 2.6rem;
    margin: 0 0 .8rem;
    box-sizing: border-box;
    font-size: 1rem;
    width: 100%;
}

.col-2{
    grid-column: auto/span 2;
}

}
</style>