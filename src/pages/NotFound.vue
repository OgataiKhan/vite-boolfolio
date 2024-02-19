<script>

export default {
  name: 'NotFound',
};

</script>

<template>
  <main>
    <div class="container">
      <h2>
        Page Not Found
      </h2>
      <p>
        <router-link :to="{ name: 'home' }" class="nav-link">Back to home</router-link>
      </p>
    </div>
  </main>
</template>

<style scoped></style>