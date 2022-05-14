<script>
import Task from "./task.vue"
export default {
    name: "taskList",
    props: {
        tasks: Array
    },
    components: {
        Task
    },
    methods: {
        log() {
            console.log(this.tasks)
        }
    },
    emits: ["delete-task"],
}
</script>

<template>
<button @click="log"></button>
    <div v-for="task in tasks" :key="task.id" class="">

        <Task @delete-task="$emit('delete-task', id)" :title="task.title" :id="task.id" />
    </div>
</template>

