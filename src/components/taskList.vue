<script>
import Task from "./task.vue";
export default {
  name: "taskList",
  props: {
    tasks: Array,
  },
  components: {
    Task,
  },

  emits: ["delete-task"],
};
</script>

<template>
  <div v-if="tasks.length == 0">
    <p class="text-slate-300 text-xl mx-auto">No Remaining Tasks</p>
  </div>
  <div v-if="tasks.length > 0" class="flex flex-row justify-between w-1/6 min-w-[100px]">
    <span class="iconify" style="color: white;" data-icon="ic:outline-navigate-next" data-flip="horizontal"></span>
    <p>Page 1 of 1</p>
    <span class="iconify p-2 bg-slate-600 rounded-full" style="color: white;" data-icon="ic:outline-navigate-next" ></span>
  </div>
  <div v-for="task in tasks" :key="task.id" >
    <Task
      @delete-task="$emit('delete-task', task.id)"
      :title="task.title"
      :id="task.id"
    />
  </div>
</template>
