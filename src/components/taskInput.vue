<template>
  <div class="flex flex-row justify-center items-center w-full">
    <input
      type="text"
      v-model="input"
      class="w-1/6 p-2 min-w-[300px] rounded-lg bg-transparent border-2 border-slate-500 outline-none focus:border-slate-400 text-slate-300"
    />
    <button
      v-on:click="$emit('add-task', input)"
      class="p-3 px-6 min-w-[75px] rounded-xl bg-gray-700 hover:bg-gray-600 transition mx-4 text-white font-bold"
    >
      Add
    </button>
  </div>
</template>

<script>
export default {
    name : "input",
    data() {
        input: ""
    },
    methods: {
        log() {
            console.log(this.input)
        }
    },
}
</script>
