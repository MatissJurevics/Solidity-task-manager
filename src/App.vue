<script>
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
};
</script>

<template>
  <main class="bg-gray-800 w-screen h-screen overflow-hidden px-24">
    <nav class="flex flex-row justify-center items-center py-4">
      <h1
        class="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500"
      >
        Ethereum Task Manager
      </h1>
    </nav>

    <section class="flex flex-col items-center mt-8 w-full">
      <div class="flex flex-row justify-center items-center w-full">
        <input
          type="text"
          v-model="input"
          class="w-1/6 p-2 rounded-lg bg-transparent border-2 border-slate-500 outline-none focus:border-slate-400 text-slate-300"
        />
        <button
          v-on:click="taskAdd"
          class="p-3 px-6 rounded-xl bg-gray-700 hover:bg-gray-600 transition mx-4 text-white font-bold"
        >
          Add
        </button>
      </div>
      <ul class="w-full flex flex-col items-center mt-8">
        <div
          v-for="task in tasks"
          :key="task"
          class="w-1/3 my-3 px-3 py-4 border-2 border-slate-600 rounded-xl text-white flex flex-row justify-between"
        >
          <p class="my-auto">{{ task.title }}</p>
          <p class="font-bold text-xl cursor-pointer">X</p>
        </div>
      </ul>
    </section>
  </main>
</template>
