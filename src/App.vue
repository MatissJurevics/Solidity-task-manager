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
      tasks: [
        {
          id: uuid(),
          title: "this is a test",
        },
      ],
    };
  },
  methods: {
    async loadTasks() {
      let _tasks = await this.contract.viewTasks();
      tasks = _tasks;
    },
    addTask(title) {
      let newTask = {};
      newTask.title = title;
      newTask.id = uuid();
      this.tasks.push(newTask);
    },
    deleteTask(id) {
      let newTasks = this.tasks.filter((t) => {
        return t.id !== id;
      });
      this.tasks = newTasks;
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
  <button @click="loadTasks">clickme</button>
  <main class="bg-gray-900 w-screen relative h-screen overflow-hidden px-24">
    <Aurora />
    <nav class="flex w-full flex-row justify-center items-center py-4">
      <h1
        class="text-xl md:text-4xl text-center font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500"
      >
        Ethereum Task Manager
      </h1>
    </nav>
    <TaskInput @add-task="addTask" />
    <section class="flex flex-col items-center mt-8 w-full">
      <ul class="w-full flex flex-col items-center mt-8">
        <TaskList @delete-task="deleteTask" :tasks="tasks" />
      </ul>
    </section>
  </main>
</template>
