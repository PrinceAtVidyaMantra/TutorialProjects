import axios from "axios";

const state = {
  todos: [
    {
      id: 1,
      title: "Todo one"
    },

    {
      id: 2,
      title: "Todo two"
    }
  ]
};

const getters = {
  allTodos(state) {
    return state.todos;
  }
};
const actions = {
  fetchTodos({ commit }) {
    axios.get("https://jsonplaceholder.typicode.com/todos").then(response => {
      console.log(response);
      commit("setTodos", response.data);
    });
  },
  addTodo({ commit }, title) {
    axios
      .post("https://jsonplaceholder.typicode.com/todos", {
        title,
        completed: false
      })
      .then(response => {
        console.log(response);
        commit("newTodo", response.data);
      });
  },
  deleteTodo({ commit }, id) {
    axios
      .delete("https://jsonplaceholder.typicode.com/todos/" + id)
      .then(response => {
        console.log(response);
        commit("removeTodo", id);
      });
  },
  filterTodos({ commit }, event) {

    const limit = parseInt(event.target.options[event.target.options.selectedIndex].innerText);
    console.log(`limit is ${limit}`);
    axios
      .get("https://jsonplaceholder.typicode.com/todos/?_limit=" + limit)
      .then(response => {
        console.log(response);
        commit("setTodos", response.data);
      });
  },
  updateTodo({ commit }, updatedTodo) {
    
    axios
      .put("https://jsonplaceholder.typicode.com/todos/" + updatedTodo.id, updatedTodo)
      .then(response => {
        console.log(response);
        commit("updateTodo", response.data);
      });
    
  }
};
const mutations = {
  setTodos(state, todos) {
    state.todos = todos;
  },
  newTodo(state, todo) {
    state.todos.unshift(todo);
  },
  removeTodo(state, id) {
    state.todos = state.todos.filter(todo => todo.id !== id);
  },
  updateTodo(state, updatedTodo) {
    const index = state.todos.findIndex(todo => todo.id === updatedTodo.id);

    if (index != -1 || index != undefined) {
        // console.log('found');
        state.todos.splice(index, 1, updatedTodo);
    }
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};
