import Vue from 'vue';
import HTTP from '../services/http';

export default {
  namespaced: true,

  state: {
    tasks: [],
    newTaskTitle: null,
  },

  actions: {
    async updateTask({ commit }, task) {
      await HTTP().patch(`tasks/${task.id}`, task)
      commit('unsetEditMode', task);
    },

    async deleteTask({ commit }, task) {
      await HTTP().delete(`tasks/${task.id}`)
      commit('removeTask', task);
    },

    async fetchTasks({ commit }) {
      const data = await HTTP().get('tasks')
      commit('setTasks', data.data);
    },

    async createTask({ commit, state }) {
      const data = await HTTP().post(`tasks`, {
        title: state.newTaskTitle,
      })
      commit('appendTask', data.data);
      commit('setNewTaskTitle', null);
    },
  },

  getters: {
    newTaskTitle: state => state.newTaskTitle,
    tasks: state => state.tasks
  },

  mutations: {
    setTasks(state, tasks) {
      state.tasks = tasks;
    },

    setNewTaskTitle(state, title) {
      state.newTaskTitle = title;
    },

    appendTask(state, task) {
      state.tasks.push(task);
    },

    setTaskTitle(state, { task, title }) {
      task.title = title;
    },

    setEditMode(state, task) {
      Vue.set(task, 'isEditMode', true);
    },

    unsetEditMode(state, task) {
      Vue.set(task, 'isEditMode', false);
    },

    removeTask(state, task) {
      state.tasks.splice(state.tasks.indexOf(task), 1);
    },

    toggleCompleted(state, task) {
      task.is_completed = !task.is_completed;
    },
  },
};