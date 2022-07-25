<template>
    <div class="budget-list-wrap">
    <ElCard class="budget-list-header" >
      <div slot="header">
        <span >{{header}}</span>
          <select class="select" v-model="selectCategory">
          <option value="0">Все категории</option>
          <option v-for="ite in list" :key="ite.id" :value="ite.type">{{ ite.type }}</option>
          </select>
            </div>

      <template>
            <div v-if="!isEmpty">
              <div class="list-item" v-for="(item, prop) in filteredProducts" :key="prop">
                <span class = "icon" v-bind:class="[item.value > 0 ? 'el-icon-plus green' : 'el-icon-minus red']"></span>
                <span class="budget-comment" v-bind:class="[item.value > 0 ? 'green' : 'red']"> {{ item.comments}} </span>
                <span class="budget-value" v-bind:class="[item.value > 0 ? 'green' : 'red']"> {{ item.value }} </span>
                <el-button type="danger" size="mini" icon="el-icon-remove-outline" round @click="deleteItem(item.id)">Delete</el-button>
              </div>
            </div>
            <el-alert v-else type="info" :title="emptyTitle"  effect="dark" show-icon="true" :closable="false"></el-alert>
      </template>
    </ElCard>
  </div>
</template>

<script>
export default {
  name: "BudgetList",
  props: {
    list: {
      type: Object,
      default: () => ({}),
    }
  },
  data: () => ({
    header: "Budget List",
    emptyTitle: "Empry List",
    selectCategory: 0,
  }),

  computed: {
    isEmpty() {
      return !Object.keys(this.list).length
    },
    filteredProducts: function() {
      console.log(this.list);
            return  Object.values(this.list).filter(list => {
                    console.log(this.list);
                    return this.selectCategory == 0 || list.type === this.selectCategory;

                })

        }
},


  methods: {
    deleteItem(id) {
      this.$emit('deleteItem', id);
    }
  }
}
</script>

<style scoped>
.budget-list-wrap {
  max-width: 500px;
  margin: auto;
}
.budget-list-header {
  text-align: left;
}

.select {
  float: right;
  padding: 3px;

}

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
