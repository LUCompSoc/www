<template>
  <v-app>
    <!-- The app bar is visible on every route -->
    <app-bar />

    <v-main>
      <!-- Render the content for whatever route we are visiting here -->
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'app',
}
</script>
