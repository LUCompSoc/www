<template>
  <v-app>
    <v-app-bar
      app
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="CSS Logo"
          class="mr-2"
          contain
          :src="require('./assets/CSSLogo.svg')"
          width="80"
        />

        <h2 class="ml-2">LU CompSoc</h2>
      </div>

      <v-spacer />

      <v-btn
        href="#"
        text
      >
        <span class="mr-2">Blog</span>
      </v-btn>

      <v-btn
        href="#"
        text
      >
        <span class="mr-2">Contact</span>
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',
}
</script>
