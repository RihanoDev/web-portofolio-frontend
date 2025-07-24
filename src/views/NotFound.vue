<template>
  <div class="not-found">
    <div class="not-found__content">
      <h1>404</h1>
      <p>Page not found</p>
      <router-link to="/" class="btn">Back to Home</router-link>
    </div>
  </div>
</template>

<style scoped>
.not-found {
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: var(--spacing-xl) var(--container-padding);
}

.not-found__content {
  max-width: 600px;
}

.not-found h1 {
  font-size: 6rem;
  color: var(--color-primary);
  margin-bottom: var(--spacing-md);
}

.not-found p {
  font-size: 1.5rem;
  color: var(--color-secondary);
  margin-bottom: var(--spacing-lg);
}

.btn {
  display: inline-block;
  padding: var(--spacing-md) var(--spacing-lg);
  background: var(--color-primary);
  color: var(--color-background);
  text-decoration: none;
  border-radius: var(--radius-md);
  transition: transform var(--transition-fast);
}

.btn:hover {
  transform: translateY(-2px);
}
</style>
