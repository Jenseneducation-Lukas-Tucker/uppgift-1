<template>
<div class="hello">
    <h1>{{ msg }}</h1>
</div>
</template>

<script>
export default {
name: 'Top',
props: {
    msg: String
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h1{
display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    text-transform: uppercase;
    text-align: center;

}

</style>