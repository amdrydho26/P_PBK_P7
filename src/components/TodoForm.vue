<template>
  <form @submit.prevent="$emit('add-todo')" class="todo-form">
    <input ref="inputEl" v-model="inputValue" @input="$emit('update:new-todo', inputValue)" type="text" placeholder="Catet dulu sebelum lupa:)" class="todo-input" />
    <button
      type="submit"
      :disabled="!inputValue.trim()"
      :class="['add-btn', { disabled: !inputValue.trim() }]"
      @mouseenter="hovered = true"
      @mouseleave="hovered = false"
    >
      {{ inputValue.trim() ? (hovered ? 'Pencet' : 'Catet!') : 'Kosong!' }}
    </button>
  </form>
</template>

<script setup>
import { ref, watch, watchEffect } from 'vue';
const props = defineProps({
  newTodo: {
    type: String,
    required: true
  }
});
const inputValue = ref(props.newTodo);
const inputEl = ref(null);
const hovered = ref(false);
watch(() => props.newTodo, (val, oldVal) => {
  inputValue.value = val;
});
watchEffect(() => {
  if (props.newTodo === '' && inputEl.value) {
    inputEl.value.focus();
  }
});
</script>

<style scoped>
.todo-form {
  display: flex;
  gap: 8px;
  margin-bottom: 0;
}
.todo-input {
  flex: 1;
  padding: 10px 12px;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  font-size: 1rem;
}
.add-btn {
  background: #3182ce;
  color: #fff;
  border: none;
  padding: 10px 18px;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.2s;
}
.add-btn:hover:enabled {
  background: #2563eb;
}
.add-btn.disabled,
.add-btn:disabled {
  background: #cbd5e1;
  color: #64748b;
  cursor: not-allowed;
}
</style> 