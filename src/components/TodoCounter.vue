<template>
  <div class="counter-wrap">
    <div class="counter-item total">
      <span class="label">Total</span>
      <span class="value">{{ total }}</span>
    </div>
    <div class="counter-item finished">
      <span class="label">Selesai</span>
      <span class="value">{{ finished }}</span>
    </div>
    <div class="counter-item unfinished">
      <span class="label">Belum</span>
      <span class="value">{{ unfinished }}</span>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  total: {
    type: Number,
    required: true
  },
  finished: {
    type: Number,
    required: true
  },
  unfinished: {
    type: Number,
    required: true
  }
});
</script>

<style scoped>
.counter-wrap {
  display: flex;
  justify-content: space-around;
  gap: 18px;
  padding: 6px 0;
}
.counter-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 60px;
}
.label {
  font-size: 0.98rem;
  color: #94a3b8;
  margin-bottom: 2px;
}
.value {
  font-size: 1.25rem;
  font-weight: 600;
  color: #2d3748;
  letter-spacing: 0.5px;
}
.counter-item.finished .value {
  color: #22c55e;
}
.counter-item.unfinished .value {
  color: #f59e42;
}
.counter-item.total .value {
  color: #2563eb;
}
</style> 