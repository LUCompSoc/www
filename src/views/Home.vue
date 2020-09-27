<template>
  <div class="home">
    <v-container fluid>
      <v-row
        class="onboarding hex-background"
        align="center"
        justify="center"
      >
        <v-col
          class="text-center"
          cols="12" sm="10" md="8" lg="7"
        >
          <div class="display-4">
            LU CompSoc<span :class="{ 'transparent--text': underscore }">_</span>
          </div>

          <div class="my-8 subtitle-1">
            Bringing together students with an interest in computing, technology
            in general and their wider implications.
          </div>

          <v-btn
            color="secondary"
            href="https://lancastersu.co.uk/groups/computer-science-society-2c91"
            target="_blank"
          >
            Become a member
            <v-icon right>mdi-arrow-right</v-icon>
          </v-btn>
        </v-col>
      </v-row>

      <!-- Activities -->
      <v-row justify="center py-8">
        <v-col
          class="text-center"
          cols="12"
        >
          <div class="display-1 mb-4">What we do</div>

          <v-container>
            <v-row>
              <v-col
                v-for="{ icon, title, text } in activities"
                :key="title"
                cols="12" md="6" lg="4"
              >
                <v-card>
                  <v-icon v-text="icon" size="96" color="primary" class="mt-4" />
                  <v-card-title v-text="title" />
                  <v-card-text v-text="text" class="text-start" />
                </v-card>
              </v-col>
            </v-row>
          </v-container>
        </v-col>
      </v-row>

      <v-row class="hex-background py-8" justify="center">
        <!-- Discord server information -->
        <v-col
          class="text-center"
          cols="12" sm="10" md="6" lg="5"
        >
          <div class="display-1 mb-4">Get involved</div>

          <div class="body-1 mb-4">
            Join our community Discord server.
          </div>

          <!-- Discord server widget -->
          <iframe
            src="https://discordapp.com/widget?id=602960107130716165&theme=dark"
            width="100%"
            height="400"
            allowtransparency="true"
            frameborder="0"
            sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
          />
        </v-col>

        <!-- Social media information -->
        <v-col
          class="text-center"
          cols="12" md="6" lg="5"
        >
          <div class="display-1 mb-4">Connect with us</div>

          <div class="body-1">
            Follow us on our social media to stay updated with the latest news
            and events.
          </div>

          <!-- Social links -->
          <div class="px-16 mt-8">
            <v-btn
              text large color="#4267B2"
              href="https://www.facebook.com/LUCompSoc"
              target="_blank"
            >
              <v-icon left>mdi-facebook</v-icon>
              Facebook
            </v-btn>

            <v-btn
              text large color="#1a91da"
              href="https://twitter.com/LUCompSoc"
              target="_blank"
            >
              <v-icon left>mdi-twitter</v-icon>
              Twitter
            </v-btn>

            <v-btn
              text large
              class="instagram"
              href="https://instagram.com/LUCompSoc"
              target="_blank"
            >
              <v-icon left>mdi-instagram</v-icon>
              Instagram
            </v-btn>

            <v-btn
              text large color="#0073b1"
              href="https://www.linkedin.com/company/lancaster-university-computer-science-society"
              target="_blank"
            >
              <v-icon left>mdi-linkedin</v-icon>
              Linkedin
            </v-btn>

            <v-btn
              text large
              href="https://github.com/LUCompSoc"
              target="_blank"
            >
              <v-icon left>mdi-github</v-icon>
              GitHub
            </v-btn>
          </div>
        </v-col>
      </v-row>

      <v-row align="center">
        <v-col cols="6">
          <div>Kindly sponsored by:</div>
          <div class="overline"><< insert sponsors here >></div>
        </v-col>

        <v-col cols="6" class="text-end">
          <v-btn text small href="#">Constitution</v-btn>
          &middot;
          <v-btn text small href="#">Cookies policy</v-btn>
          &middot;
          <v-btn text small href="#">Privacy policy</v-btn>
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
    activities: [
      { icon: 'mdi-code-tags', title: 'Hobby projects', text: 'Lorem ipsum' },
      { icon: 'mdi-account-multiple-plus', title: 'Network opportunities', text: 'Lorem ipsum' },
      { icon: 'mdi-school', title: 'Revision sessions', text: 'Lorem ipsum' },
      { icon: 'mdi-account-voice', title: 'Professional talks', text: 'Lorem ipsum' },
      { icon: 'mdi-ticket', title: 'Social events', text: 'Lorem ipsum' },
      { icon: 'mdi-memory', title: 'Workshops', text: 'Lorem ipsum' },
    ],
  }),
  created() {
    // Create an interval to show/hide the underscore.
    this.interval = window.setInterval(() => {
      this.underscore = !this.underscore
    }, 1000)
  },
  beforeDestroy() {
    // Clean up our interval before the component is destroyed.
    window.clearInterval(this.interval)
  },
}
</script>

<style lang="scss">
@import '~vuetify/src/styles/styles';

.home {
  .container {
    padding-top: 0;

    .hex-background {
      background: url('../assets/hexabump.png');
    }
  }

  .onboarding {
    height: 70vh;

    .subtitle-1 {
      font-size: 1.3rem !important;
    }
  }

  .instagram {
    .v-btn__content, i {
      background: -webkit-linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      border-radius: 4px;
    }
  }
}
</style>
