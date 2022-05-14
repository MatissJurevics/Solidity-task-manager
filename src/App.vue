<script>
import TaskInput from "./components/taskInput.vue"
import Aurora from "./components/auroraBG.vue"
export default {
  data() {
    return {
      input: "",
      tasks: [
        {
          title: "collect Debts",
        },
        {
          title: "Gather the townspeople",
        },
        {
          title: "Go on a shopping spree",
        },
      ],
    };
  },
  methods: {
    taskAdd() {
      console.log(this.input);
      this.tasks.push({
        title: this.input,
      });
      console.log(this.tasks);
    },
  },
  components: {
    TaskInput,
    Aurora
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
   <TaskInput />
    <section class="flex flex-col items-center mt-8 w-full">

      <ul class="w-full flex flex-col items-center mt-8">
        <div
          v-for="task in tasks"
          :key="task"
          class="w-1/3 min-w-[350px] my-3 px-3 py-4 border-2 border-slate-600 rounded-xl text-white flex flex-row justify-between hover:bg-white/5 hover:-translate-y-1 hover:scale-105 hover:shadow-lg transition ease-in-out"
        >
          <p class="my-auto">{{ task.title }}</p>
          <p class="font-bold text-xl cursor-pointer hover:text-red-400 transition ease-in-out">X</p>
        </div>
      </ul>
    </section>
  </main>
</template>
