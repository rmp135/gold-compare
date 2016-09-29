<template>
  <div>
    <img src="./money-gold.gif"></img>
    <input ref="goldInput" v-model="gold" type="number" min="0" @input="$emit('input', goldAsNumber)"></input>
    <img src="./money-silver.gif"></img>
    <input v-model="silver" type="number" min="0" max="99" @input="$emit('input', goldAsNumber)"></input>
    <img src="./money-copper.gif"></img>
    <input v-model="copper" type="number" min="1" max="99" @input="$emit('input', goldAsNumber)"></input>
  </div>
</template>
<style>
  .gold-edit > img {
    display: inline;
  }
  .gold-edit > input {
    width: 50px;
    display: inline;
    box-sizing: border-box;
  }
</style>
<script>
  module.exports = {
    name:'gold-edit',
    props: ['value'],
    mounted () {
      this.$refs.goldInput.select();
    },
    data () {
      return {
        gold:0,
        silver:0,
        copper:0
      }
    },
    computed: {
      goldAsNumber () {
        return this.copper + this.silver * 100 + this.gold * 10000;
      }
    }
  }
</script>
