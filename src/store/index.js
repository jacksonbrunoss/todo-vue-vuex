import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todos: []
  },
  mutations: {
    addTodo(state, payload) {
      state.todos.push(payload);
    }
  },
  actions: {
    addTodo({ commit }, task) {
      commit("addTodo", task);
      task.id = Date.now();
    }
  },
  modules: {}
});
