<template>
  <div class="home">
    <v-container fluid>
      <v-row class="onboarding" align="center" justify="center" >
        <v-col class="text-center" cols="12" sm="10" md="8" lg="7">
          <div class="display-4">
            LU CompSoc<span :class="{ 'transparent--text': underscore }">_</span>
          </div>

          <div class="my-8 subtitle-1">
            Bringing together students with an interest in computing, technology
            in general and their wider implications.
          </div>

          <v-btn
            color="secondary"
          >
            Become a member
            <v-icon right>mdi-arrow-right</v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'home',
  data: () => ({
    underscore: true,
    interval: null,
  }),
  created() {
    // Create an interval to show/hide the underscore.
    this.interval = window.setInterval(() => {
      this.underscore = !this.underscore;
    }, 1000)
  },
  beforeDestroy() {
    // Clean up our interval before the component is destroyed.
    window.clearInterval(this.interval);
  }
}
</script>

<style lang="scss">
@import '~vuetify/src/styles/styles';

.home {
  .container {
    padding-top: 0;
  }

  .onboarding {
    background: url('../assets/hexabump.png');
    height: 100vh;

    .subtitle-1 {
      font-size: 1.3rem !important;
    }
  }
}
</style>
