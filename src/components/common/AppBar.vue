<template>
  <v-app-bar
    class="app-bar"
    color="secondary darken-2"
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
      // Hide these routes for now since they have no content
      // { name: 'Blog', route: { name: 'blog' } },
      // { name: 'Contact', route: { name: 'contact' } },
    ],
  }),
}
</script>

<style lang="scss">
.app-bar {
  // Change the font of the "LU CompSoc" text and remove underline.
  .logo {
    color: white;
    font-family: 'Ubuntu Mono', sans-serif;
    font-size: 1.2rem;
    text-decoration: none;
  }

  // Space out the route buttons with extra margins.
  .v-btn {
    margin-right: 16px;
    position: relative;

    &:last-of-type {
      margin-right: 4px;
    }
  }
}
</style>
