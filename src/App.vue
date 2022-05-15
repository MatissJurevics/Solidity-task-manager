<script>
import TaskInput from "./components/taskInput.vue";
import Aurora from "./components/auroraBG.vue";
import TaskList from "./components/taskList.vue";
import c from "./contractSetup.js";
import { ethers } from "ethers";
import { v4 as uuid } from "uuid";
export default {
  data() {
    return {
      input: "",
      contract: c.setupContract(),
      tasks: [],
      alert: false
    };
  },
  methods: {
    async loadTasks() {
      let cont = await this.contract
      let newlist = await cont.viewTasks();
      this.tasks = newlist
    },
    async addTask(title) {
      
      let cont = await this.contract
      let newlist = await cont.addTask(title, uuid())
      this.alert = true
      console.log("newllist: "+newlist);
    },
    async deleteTask(id) {
      let cont = await this.contract
      let newlist = await cont.removeTask(id)
      this.alert = true
      this.tasks = newlist;
      
    },
  },

  emits: ["add-task", "delete-task"],
  components: {
    TaskInput,
    Aurora,
    TaskList,
  },
};
</script>

<template>

  <main class="bg-gray-900 w-screen relative h-screen overflow-hidden px-24">
    <Aurora />
    <nav class="flex w-full flex-col justify-center items-center py-4">
      <h1
        class="text-xl md:text-4xl text-center font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500"
      >
        Ethereum Task Manager
      </h1>
      <button class="bg-slate-600 rounded-xl p-3 mt-4 text-white" @click="loadTasks">
      Load Tasks
    </button>
    </nav>
    
    <TaskInput @add-task="addTask" />
    <div v-if="alert" class="flex flex-row mt-4 justify-center items-center text-lg text-slate-300 ">
      <p class="max-w-[500px] text-center">Note: upon running the contract it may take up to a minute for the task to be added / removed also click "load tasks" to reload</p>
    </div>
    <section class="flex flex-col items-center mt-8 w-full">
      <ul class="w-full flex flex-col items-center mt-8">
        <TaskList @delete-task="deleteTask" :tasks="tasks" />
      </ul>
    </section>
  </main>
</template>
