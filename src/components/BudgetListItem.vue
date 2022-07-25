<template>

      <div v-if="isEmpty">
      <select class="select" v-model="selectCategory">
      <option value="0">Все категории</option>
      <option v-for="item in list" :key="item.id" :value="item.type">{{ item.type }}</option>
      </select>

        <div class="list-item" v-for="(item, prop) in filteredProducts" :key="prop">
          <!-- <div v-bind:class="[item.type === 'INCOME' ? 'el-icon-remove-outline' : '']></i> -->
          <span class = "icon" v-bind:class="[item.value > 0 ? 'el-icon-plus green' : 'el-icon-minus red']"></span>
          <span class="budget-comment" v-bind:class="[item.value > 0 ? 'green' : 'red']"> {{ item.comments}} </span>
          <span class="budget-value" v-bind:class="[item.value > 0 ? 'green' : 'red']"> {{ item.value }} </span>
          <el-button type="danger" size="mini" icon="el-icon-remove-outline" round @click="deleteItem(item.id)">Delete</el-button>
        </div>

      </div>
      <el-alert v-else type="info" :title="emptyTitle"  effect="dark" show-icon="true" :closable="false"></el-alert>

</template>

<script>

export default {
  name: 'BudgetListItem',
  props: {
  list: {
    type: Object,
    default: () => ({})
    }
  },
  data: () => ({
  emptyTitle: "Empry List",
  selectCategory: 0,

  }),

  computed: {
    isEmpty() {
      return Object.keys(this.list).length
    },
    filteredProducts: function() {
        return this.list
            // Фильтруем по категории
            .filter(list => {
                return this.selectCategory == 0 || list.type == this.selectCategory;
            })

    }

  //   classObject: function () {
  //   return {
  //     green: [this.lis.value > 0 ],
  //     red: [this.value < 0 ]


  //   }
  // }

  },
  methods: {

    deleteItem(id) {
      this.$emit('deleteItem', id);
    }
  }

}
</script>

<style scoped>
.list-item {
  display: flex;
  align-items: center;
  padding: 10px 15px;
}

.budget-value {
  font-weight: bold;
  margin-left: auto;
  margin-right: 20px;
}

.red{
  color: red;
}

.green {
  color: green;
}

.icon {
  margin-right: 7px;
}



</style>