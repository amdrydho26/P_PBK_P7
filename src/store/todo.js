import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

export const useTodoStore = defineStore('todo', () => {
  const todos = ref([]);
  let nextId = 1;

  function addTodo(text) {
    if (text.trim() !== '') {
      todos.value.push({ id: nextId++, text, done: false });
    }
  }

  function removeTodo(index) {
    todos.value.splice(index, 1);
  }

  function toggleDone(index) {
    const todo = todos.value[index];
    todo.done = !todo.done;
    todos.value.splice(index, 1);
    if (todo.done) {
      todos.value.push(todo);
    } else {
      todos.value.unshift(todo);
    }
  }

  const unfinishedCount = computed(() => todos.value.filter(t => !t.done).length);
  const finishedCount = computed(() => todos.value.filter(t => t.done).length);
  const totalCount = computed(() => todos.value.length);

  return { todos, addTodo, removeTodo, toggleDone, unfinishedCount, finishedCount, totalCount };
}); 