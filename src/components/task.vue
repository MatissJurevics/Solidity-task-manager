<script>
export default {
    name: "task",
    props: {
        title: String,
        id: Number, 
    }
}
</script>

<template>
<div class="w-1/3 min-w-[350px] my-3 px-3 py-4 border-2 border-slate-600 rounded-xl text-white flex flex-row justify-between hover:bg-white/5 hover:-translate-y-1 hover:scale-105 hover:shadow-lg transition ease-in-out">
    <p class="my-auto">{{ title }}</p>
    <p @click="$emit('delete-task', id)" class="font-bold text-xl cursor-pointer hover:text-red-400 transition ease-in-out">X</p>
</div>
</template>