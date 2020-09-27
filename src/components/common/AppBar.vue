<template>
  <v-app-bar
    class="app-bar"
    app
    dark
  >
    <!-- CompSoc logo -->
    <router-link :to="{ name: 'home' }" class="text-decoration-none white--text">
      <div class="d-flex align-center">
        <v-img
          alt="CSS Logo"
          class="mr-2"
          contain
          :src="require('../../assets/CSSLogo.svg')"
          width="80"
        />

        <h2 class="ml-2">LU CompSoc</h2>
      </div>
    </router-link>

    <v-spacer />

    <!-- Navigation links -->
    <div class="navigation">
      <a
        v-for="{ name, route } in routes"
        class="link text-button"
        :key="name"
        @click="navigate(route)"
        v-text="name"
      />
    </div>
  </v-app-bar>
</template>

<script>
export default {
  name: 'app-bar',
  data: () => ({
    routes: [
      { name: 'Blog', route: { name: 'blog' } },
      { name: 'Contact', route: { name: 'contact' } },
    ],
  }),
  methods: {
    navigate(route) {
      this.$router.push(route);
    },
  }
}
</script>

<style lang="scss">
.app-bar {
  .link {
    position: relative;
    margin-right: 16px;

    &:before {
      content: '';
      position: absolute;
      width: 0;
      height: 1px;
      bottom: 0;
      left: 0;
      background: linear-gradient(to left, var(--v-primary-base), var(--v-secondary-base));
      visibility: hidden;
      transition: all 0.25s ease-in-out;
    }

    &:hover:before {
      visibility: visible;
      width: 100%;
    }

    &:last-of-type {
      margin-right: 0;
    }
  }
}
</style>
