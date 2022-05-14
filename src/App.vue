<script>
import TaskInput from "./components/taskInput.vue"
import Aurora from "./components/auroraBG.vue"
import TaskList from "./components/taskList.vue"
export default {
  data() {
    return {
      input: "",
      tasks: [
        {
          id: 0,
          title: "collect Debts",
        },
        {
          id: 1,
          title: "Gather the townspeople",
        },
        {
          id: 2,
          title: "Go on a shopping spree",
        },
      ],
    };
  },
  methods: {
    addTask(title) {
      let newTask = {}
      newTask.title = title;
      newTask.id = this.tasks.length
      this.tasks.push(newTask);
    },
    deleteTask(id) {

    }
  },
  emits: ["add-task", "delete-task"],
  components: {
    TaskInput,
    Aurora,
    TaskList
  }
};
</script>

<template>
  <main class="bg-gray-900 w-screen relative  h-screen overflow-hidden px-24">

    <Aurora />
    <nav class="flex flex-row justify-center items-center py-4">
      <h1
        class="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500"
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
