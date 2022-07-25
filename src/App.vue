
<template>
  <div id="app">
    <Header/>
    <Form @submitForm="onFormSubmit"/>
    <TotalBalance :total="totalBalance" />
    <BudgetList :list="list" @deleteItem="onDeleteItem"/>



  </div>
</template>

<script>
import BudgetList from '@/components/BudgetList.vue';
import TotalBalance from '@/components/TotalBalance.vue';
import Form from '@/components/Form.vue';
import  { mapGetters } from 'vuex';
import Header from '@/components/Header.vue';




export default {
  name: 'App',
  components: {
    BudgetList,
    TotalBalance,
    Form,
    Header
  },


  data: () => ({
    list: this.list,
  }),

  computed: {
    totalBalance () {
      return Object.values(this.list).reduce(
        (acc, item) => acc + item.value,
        0
      );
    },

    ...mapGetters("data", ["list"]),
  },

  methods: {

    onDeleteItem(id) {
      if (confirm("Вы действительно хотите удалить пункт записи?")) {
        const comments = id
        alert(`Точно удалемя этот ${comments} пункт` )
        this.$delete(this.list, id);
      } else {
        alert("Передумали удалять")
        }
    },

    // Перенес как acttions во vuex

    // onFormSubmit(data) {
    //   console.log(data)
    //   const newObj = {
    //     ...data,
    //     id: String(Math.random())
    //   };

    //   console.log(newObj);
    //   newObj.type === 'OUTCOME' && newObj.value > 0 ? newObj.value = -newObj.value : newObj;
    //   newObj.type === 'INCOME' && newObj.value < 0 ? newObj.value = Math.abs(newObj.value) : newObj;


    //   this.$set(this.list, newObj.id, newObj);
    //   console.log(this.list);
    // }
  }
};

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.div {
  font-size: 15px;
  color: #2c3e50;

}
</style>
