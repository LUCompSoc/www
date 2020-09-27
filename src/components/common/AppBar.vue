<template>
  <v-app-bar
    class="app-bar"
    app
    dark
  >
    <!-- CompSoc logo -->
    <router-link :to="{ name: 'home' }" class="logo">
      <div class="d-flex">
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
      <v-btn
        v-for="{ name, route } in routes"
        :key="name"
        text
        :to="route"
        active-class="active"
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
}
</script>

<style lang="scss">
.app-bar {
  .logo {
    color: white;
    font-family: 'Ubuntu Mono', sans-serif;
    font-size: 1.2rem;
    text-decoration: none;
  }

  .v-btn {
    margin-right: 16px;
    position: relative;

    &.v-btn--active {
      color: var(--v-primary-base);

      &::before {
        opacity: 0.1;
      }
    }

    &:last-of-type {
      margin-right: 4px;
    }
  }
}
</style>
