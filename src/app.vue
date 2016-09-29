<template>
  <div id="app" class="container">
    <div class="pure-u-1-1">
      <label for="undercutInput">Under Percentage</label>
      <input id="undercutInput" type="number" v-model="undercutPercent"></input>
    </div>
    <div>
      <table class="pure-table pure-table-horizontal">
        <thead>
          <td>Price</td>
          <td>Stack Size</td>
          <td>Total Price</td>
          <td>Undercut?</td>
          <td>Undercut Price</td>
        </thead>
        <tr class="item row" v-for="item, index in lines">
          <td>
            <gold-edit v-model="item.price" class="flexy"></gold-view>
          </td>
          <td>
            <input class="stack-size" type="number" min="1" v-model="item.size" @keydown.tab="createLine(index, $event)"></td>
          <td>
            <gold-view :price="item.price * item.size"></gold-view>
          </td>
          <td>
            <input type="radio" v-model="radio" :value="index"/>
          </td>
          <td>
            <gold-view v-show="radio == index" :price="undercutPrice(item)"></gold-view>
          </td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td>
            <gold-view :price="totalBuyPrice"></gold-view>
          </td>
          <td></td>
          <td>
            <gold-view :price="totalUndercutPrice"></gold-view>
          </td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td>
            <gold-view :price="totalUndercutPrice - totalBuyPrice"></gold-view>
          </td>
          <td v-html="totalUndercutPercentAsHTML"></td>
          <td>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<style>
  #app {
  }
  .stack-size {
    width: 50px;
  }
  .flexy {
    display: flex;
    align-items: baseline;
    justify-content: space-around;
  }
  .flexy > * {
    margin-left: 5px;
    margin-right: 5px;
  }
</style>
<script>
  module.exports = {
    el: '#app',
    data: {
      undercutPercent: 5,
      radio:0,
      lines: [
        {
          price: 0,
          size: 1,
          selected: false
        }
      ]
    },
    computed: {
      totalUndercutPercentAsHTML: function() {
        var price = this.trim(this.totalBuyPrice / this.totalUndercutPrice * 100);
        return (isNaN(price) ? "&#10717;" : price) + "%";
      },
      totalStackSize: function() {
        return this.lines
        .filter((l, i) => i < this.radio)
        .map((l) => l.size)
        .reduce(((p1, p2) => p1 + p2), 0);
      },
      totalBuyPrice: function() {
        return this.lines
        .filter((l, i) => i < this.radio)
        .map((l) => l.price * l.size)
        .reduce(((p1, p2) => p1 + p2), 0);
      },
      totalUndercutPrice: function() {
        return Math.floor((this.lines[this.radio].price - this.lines[this.radio].price * this.undercutPercent / 100) * this.totalStackSize);
      }
    },
    methods: {
      undercutPrice: function(line) {
        return Math.floor(line.price - line.price * this.undercutPercent / 100)
      },
      createLine: function(index, e) {
        if (e.shiftKey) return;
        if (index == this.lines.length -1) {
          this.lines.push({
            price: 0,
            size: 1,
            selected: false
          });
          e.preventDefault();
        }
      },
      trim: (num) => Math.floor(num*100) / 100
    },
    components: {
      goldView: require('./gold-view.vue'),
      goldEdit: require('./gold-edit.vue')
    }
  }
</script>
