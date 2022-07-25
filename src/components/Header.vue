<template>
  <div>Header {{ list }}</div>
</template>


<script>
import {mapGetters } from "vuex";

export default {
  name: 'Header',
  computed: {
      ...mapGetters("data", ["list"]),

  }
}
</script>