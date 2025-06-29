<template>
  <div class="app-bg">
    <Card>
      <CardHeader />
    </Card>
    <Card>
      <CardSubtitle />
    </Card>
    <Card>
      <TodoCounter
        :total="todoStore.totalCount"
        :finished="todoStore.finishedCount"
        :unfinished="todoStore.unfinishedCount"
      />
    </Card>
    <Card>
      <TodoList :todos="todoStore.todos" @remove-todo="todoStore.removeTodo" @toggle-done="todoStore.toggleDone" />
    </Card>
    <Card>
      <TodoForm :new-todo="newTodo" @update:new-todo="val => newTodo = val" @add-todo="addTodo" />
    </Card>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useTodoStore } from './store/todo';
import TodoForm from './components/TodoForm.vue';
import TodoList from './components/TodoList.vue';
import CardHeader from './components/CardHeader.vue';
import CardSubtitle from './components/CardSubtitle.vue';
import Card from './components/Card.vue';
import TodoCounter from './components/TodoCounter.vue';

const todoStore = useTodoStore();
const newTodo = ref('');

function addTodo() {
  todoStore.addTodo(newTodo.value);
  newTodo.value = '';
}
</script>

<style scoped>
.app-bg {
  min-height: 100vh;
  background: linear-gradient(120deg, #E5E5E5 0%, #EDEDED 60%, #C6C8C9 100%);
  padding: 40px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
}
.unfinished {
  text-align: center;
  color: #64748b;
  font-size: 1.05rem;
  margin: 0;
}
</style>