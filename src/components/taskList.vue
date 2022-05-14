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
  <div v-for="task in tasks" :key="task.id" >
    <Task
      @delete-task="$emit('delete-task', task.id)"
      :title="task.title"
      :id="task.id"
    />
  </div>
</template>
