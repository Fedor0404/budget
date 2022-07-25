import Vue from 'vue';

const dataBase = {
  namespaced: true,
  state: {
    list: {
      1: {type: 'IMCOME', value: 100, comments: 'Some comments', id:1 },
      2: {type: 'OUTCOME', value: -10, comments: 'Some outcome comment', id:2},
    }
  },
  getters: {
    list: ({ list }) => Object(list)
  },
  mutations: {
    ADD_ITEM(state, data) {
      // state.list[data.id] = data;
      Vue.set(state.list, data.id, data)

    }
  },
  actions: {
    onFormSubmit({commit}, data) {
      const newObj = {
        ...data,
        id: String(Math.random())
      };

      console.log(newObj);
      newObj.type === 'OUTCOME' && newObj.value > 0 ? newObj.value = -newObj.value : newObj;
      newObj.type === 'INCOME' && newObj.value < 0 ? newObj.value = Math.abs(newObj.value) : newObj;
      // this.$set(this.list, newObj.id, newObj);
      commit('ADD_ITEM', newObj);
  }
}
};

export default dataBase;