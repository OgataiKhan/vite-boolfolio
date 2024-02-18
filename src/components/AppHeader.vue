<script>


export default {
  name: 'HeaderComponent',
  data() {
    return {
      navbar: [
        {
          label: 'Home',
          routeName: 'home',
        },
        {
          label: 'Project List',
          routeName: 'projects',
        },
        {
          label: 'About',
          routeName: 'about',
        },
      ],
    };
  },
};

</script>

<template>
  <header class="bg-info">
    <div class="container d-flex justify-content-between">
      <nav>
        <ul class="list-unstyled d-flex gap-2">
          <li v-for="(item, index) in navbar" :key="index">
            <router-link :to="{ name: item.routeName }" class="nav-link">{{ item.label }}</router-link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style scoped></style>