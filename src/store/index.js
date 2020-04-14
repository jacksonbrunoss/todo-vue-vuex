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
    },
    removeTodo(state, payload) {
      state.todos.splice(state.todos.indexOf(payload), 1);
      // state.todos = state.todos.filter(item => item.id !== payload.id);
    }
  },
  actions: {
    addTodo({ commit }, task) {
      commit("addTodo", task);
      task.id = Date.now();
    },
    removeTodo({ commit }, task) {
      commit("removeTodo", task);
    }
  },
  modules: {}
});
