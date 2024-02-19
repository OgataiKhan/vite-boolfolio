<script>

export default {
  name: 'ProjectDetail',
  created() {
    
  }
};

</script>

<template>
  <main>
    <div class="container">
      <h2>
        Project details
      </h2>
      <p>
        <button class="btn btn-primary">
          <router-link :to="{ name: 'projects' }" class="nav-link">Back to Projects</router-link>
        </button>
      </p>
    </div>
  </main>
</template>

<style scoped></style>