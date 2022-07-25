<template>
<div v-bind:class="classObject" class="total-vatue" > Balance: {{ total }}</div>

</template>


<script>
export default {
  name: 'TotalBalance',
  props: {
    total: {
      type: Number,
      default: 0
    }
  },

  // data: () => ({
  //   total: total,
  // }),

computed: {
  classObject: function () {
    return {
      green: this.total > 0,
      red: this.total < 0,
      black: this.total === 0
    }
  }
}
}
</script>




<style scoped>
.total-vatue {
  font-size: 26px;
  text-transform: uppercase;
  padding: 20px;
  text-align: center;
}
.red {
  color: red;
}

.black {
  color: black;
}

.green {
  color: green;
}
</style>