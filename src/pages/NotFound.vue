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
        <button class="btn btn-primary">
          <router-link :to="{ name: 'home' }" class="nav-link">Back to home</router-link>
        </button>
      </p>
    </div>
  </main>
</template>

<style scoped></style>