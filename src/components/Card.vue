<template>
  <div class="card">
    <slot />
  </div>
</template>

<style scoped>
.card {
  background: #fff;
  border-radius: 16px;
  border: 1px solid #e5e7eb;
  box-shadow: none;
  padding: 20px 24px;
  max-width: 500px;
  width: 100%;
  margin: 0 auto;
  transition: box-shadow 0.25s cubic-bezier(.4,2,.6,1), transform 0.22s cubic-bezier(.4,2,.6,1), border-color 0.22s;
}
.card:hover {
  box-shadow: 0 12px 36px rgba(49,130,206,0.16);
  transform: translateY(-6px) scale(1.025);
  border-color: #cbd5e1;
  z-index: 2;
}
</style> 