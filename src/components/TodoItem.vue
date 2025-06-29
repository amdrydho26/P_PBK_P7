<template>
  <li class="todo-item" :class="{ done: todo.done }">
    <label class="checkbox-container">
      <input type="checkbox" v-model="checked" @change="$emit('toggle-done')" />
      <span class="custom-checkbox" :class="{ checked: checked }">
        <svg v-if="checked" class="checkmark" viewBox="0 0 16 16">
          <polyline points="3.5 8.5 7 12.5 13 4.5" />
        </svg>
      </span>
    </label>
    <span class="todo-text">{{ todo.text }}</span>
    <button class="remove-btn" @click="$emit('remove')" aria-label="Hapus">
      <svg class="trash-icon" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <polyline points="3 6 5 6 21 6" />
        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2" />
        <line x1="10" y1="11" x2="10" y2="17" />
        <line x1="14" y1="11" x2="14" y2="17" />
      </svg>
    </button>
  </li>
</template>

<script setup>
import { computed } from 'vue';
const props = defineProps({
  todo: {
    type: Object,
    required: true
  }
});
const checked = computed({
  get: () => props.todo.done,
  set: val => {}
});
</script>

<style scoped>
.todo-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #f7fafc;
  border-radius: 8px;
  padding: 10px 16px;
  margin-bottom: 10px;
  box-shadow: 0 1px 4px rgba(0,0,0,0.03);
  transition: box-shadow 0.2s, opacity 0.2s;
}
.todo-item.done {
  opacity: 0.5;
}
.todo-text {
  font-size: 1rem;
  color: #2d3748;
  flex: 1;
  margin-left: 12px;
  text-decoration: none;
  transition: text-decoration 0.2s;
}
.todo-item.done .todo-text {
  text-decoration: line-through;
}
.remove-btn {
  background: none;
  border: none;
  border-radius: 6px;
  padding: 4px;
  cursor: pointer;
  transition: background 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
}
.remove-btn:hover {
  background: #ffe4e6;
}
.trash-icon {
  stroke: #e53e3e;
  width: 18px;
  height: 18px;
  transition: stroke 0.2s;
}
.remove-btn:hover .trash-icon {
  stroke: #c53030;
}
.checkbox-container {
  display: flex;
  align-items: center;
  position: relative;
}
.checkbox-container input[type="checkbox"] {
  opacity: 0;
  width: 15px;
  height: 15px;
  margin: 0;
  position: absolute;
  left: 0;
  top: 0;
  cursor: pointer;
  z-index: 2;
}
.custom-checkbox {
  width: 15px;
  height: 15px;
  border: 2px solid #3182ce;
  border-radius: 50%;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s, border-color 0.2s;
  position: relative;
  z-index: 1;
}
.custom-checkbox.checked {
  background: #3182ce;
  border-color: #2563eb;
  animation: pop 0.18s;
}
@keyframes pop {
  0% { transform: scale(0.7); }
  80% { transform: scale(1.1); }
  100% { transform: scale(1); }
}
.checkmark {
  width: 10px;
  height: 10px;
  stroke: #fff;
  stroke-width: 2;
  fill: none;
  stroke-linecap: round;
  stroke-linejoin: round;
  animation: fadeIn 0.18s;
}
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
</style> 