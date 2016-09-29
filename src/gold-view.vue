<template>
  <div class="flexy gold-view">
    <img src="./money-gold.gif" />
      <div>{{ gold }}</div>
    <img src="./money-silver.gif" />
      <div>{{ silver }}</div>
    <img src="./money-copper.gif" />
      <div>{{ copper }}</div>
    </div>
</template>
<style>
  .gold-view {

  }
  .gold-view > img {
    display: inline;
  }
  .gold-view > div {
    display: inline;
  }
</style>
<script>
  module.exports = {
    name:'gold-view',
    props:{
      price: {
        type: Number,
        required:true
      }
    },
    computed: {
      copper: function() {
        return this.price % 100;
      },
      silver: function() {
        return Math.floor(this.price % 10000/100);
      },
      gold: function() {
         return Math.floor(this.price / 10000);
      }
    }
  }
</script>
