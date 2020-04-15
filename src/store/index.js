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
      //state.todos.splice(state.todos.indexOf(payload), 1);
      state.todos = state.todos.filter(item => item.id !== payload.id);
    },
    completedTodo(state, payload) {
      const index = state.todos.findIndex(i => i.id === payload.id);
      if (index > -1) {
        const completed = !state.todos[index].completed;
        Vue.set(state.todos, index, { ...state.todos[index], completed });
        console.log(completed);
      }
    }
  },
  actions: {
    addTodo({ commit }, task) {
      commit("addTodo", task);
      task.id = Date.now();
    },
    removeTodo({ commit }, task) {
      commit("removeTodo", task);
    },
    completedTodo({ commit }, task) {
      commit("completedTodo", task);
    }
  },
  modules: {}
});
