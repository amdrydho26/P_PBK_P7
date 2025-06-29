<template>
  <div>
    <ul v-if="todos.length" class="todos">
      <TodoItem
        v-for="(todo, index) in todos"
        :key="todo.id"
        :todo="todo"
        @remove="$emit('remove-todo', index)"
        @toggle-done="$emit('toggle-done', index)"
      />
    </ul>
    <div v-else class="empty-text">Belum ada tugas, hidup lo damai banget!</div>
  </div>
</template>

<script setup>
import TodoItem from './TodoItem.vue';
const props = defineProps({
  todos: {
    type: Array,
    required: true
  }
});
</script>

<style scoped>
.todos {
  list-style: none;
  padding: 0;
  margin: 0;
}
.empty-text {
  text-align: center;
  color: #a0aec0;
  font-size: 1.1rem;
  padding: 24px 0;
}
</style> 