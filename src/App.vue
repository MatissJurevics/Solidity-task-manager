<script>
export default {
  data() {
    return {
      count: 0,
      tasks: [
        {
          title: "collect Debts"
        },
                {
          title: "Gather the townspeople"
        },
                {
          title: "Go on a shopping spree"
        },
      ],
    };
  },
  methods: {
    increment() {
      this.count++;
    },
  },
};
</script>

<template>
  <main class="bg-gray-800 w-screen h-screen overflow-hidden px-24">
    <nav class="flex flex-row justify-center items-center py-4">
      <h1 class="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">Ethereum Task Manager</h1>
    </nav>

    <section class="flex flex-col items-center mt-8 w-full">
      <div class="flex flex-row justify-center items-center w-full">
        <input type="text" class="w-1/6 p-2 rounded-lg bg-transparent border-2 border-slate-500 outline-none focus:border-slate-400 text-slate-300">
        <button v-on:click="increment" class="p-3 px-6 rounded-xl bg-gray-700 hover:bg-gray-600 transition mx-4 text-white font-bold">Add</button>
      </div>
      <ul>
        <li v-for="task in tasks" :key="task">
          {{task.title}}
        </li>
      </ul>
    </section>
  </main>
</template>
