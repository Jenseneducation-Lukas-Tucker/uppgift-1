<template>
    <div class="card" v-bind:class="typeOfVendor">
        <header class="cardheader"></header>
        <img src="@/assets/chip-dark.svg" alt="chip" class="chip">
        <img 
        v-bind:src="require('@/assets/vendor-' + card.vendor + '.svg')"
        v-bind:class="typeOfVendor">

        <header>
            <section v-if="card.number" class="number">{{splitString}}</section>
            <section class="info">
                <aside class="holder">
                    <span>Cardholder Name</span>
                    <p maxlength="16">{{card.cardholder}}</p>
                </aside>
                <aside class="valid">
                    <span>Valid Until</span>
                    <p>{{card.month}} / {{card.year}}</p>
                </aside>
            </section>
        </header>
    </div>
</template>

<script>
export default {
    props:{
        card:Object
    },
    computed:{
        typeOfVendor(){
            return this.card.vendor
        },
        splitString(){
            let spaceNum = this.card.number;
            let ccNumSpaces = spaceNum.match(/.{1,4}/g);
            return ccNumSpaces.join(" ");

        }

    }
}
</script>

<style lang="scss" >
body {
    display: block;
    margin: 8px;
}
header{
    display: block;
}
.card {
    
    header {
        display: flex;
        grid-column: auto/span 2;
        grid-row: auto/span 2;
        justify-content: space-between;
        flex-direction: column;
    }
    section.number {
        font-size: 1.6rem;
        justify-items: center;
        align-self: center;
        letter-spacing: .05rem;
        padding: .5rem 0 0;
        text-transform: uppercase;
    }
    
    section.info aside.holder {
        flex: 1;
        display: block;
    }
    p{
        text-transform: uppercase;
        font-size: 0.9rem;
    }
    
    
    
}


.card section.info, .card section.number {
    grid-column: auto/span 2;
    grid-row: auto/span 1;
    display: flex;
}
.card{
    max-width: 24rem;
    height: 15rem;
    border-radius: .6rem;
    background: #eee;
    padding: 1rem;
    box-sizing: border-box;
    box-shadow: 0 0 0.5rem rgba(0,0,0,.4);
    display: grid;
    gap: .5rem 0;
    grid-template-columns: 2fr;
    font-size: 1.3rem;
    transition: 0.3s;
    &:hover{
        transform: scale(1.03)
    }
    section aside span {
    display: block;
    text-transform: uppercase;
    font-size: .7rem;
    margin: 0 0 .25rem;
}
img{
    background-color: transparent;
}

    
}

.blockchain {
    background: linear-gradient(248.52deg,rgba(0,0,0,.15) 1.49%,transparent),#8b58f9;
    color: #222;
}
.bitcoin {
    background: linear-gradient(.689turn,hsla(0,0%,100%,.15),hsla(0,0%,100%,0) 99.07%),#ffae34;
    color: #222;
}
.ninja {
    background: linear-gradient(248.3deg,hsla(0,0%,100%,.15),hsla(0,0%,100%,0)),#222;
    color: #fff;
}
.evil {
    background: linear-gradient(248.3deg,rgba(0,0,0,.16),transparent),#f33355;
    color: #222;
}



</style>