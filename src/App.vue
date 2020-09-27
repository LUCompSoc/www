<template>
  <v-app>
    <app-bar />

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'app',
}
</script>
