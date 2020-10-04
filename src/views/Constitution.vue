<template>
  <v-container class="constitution-page">
    <h1>Constitution</h1>
    <p class="body-1">
      Source on <a href="https://github.com/lucompsoc/constitution" target="_blank">GitHub</a>.
    </p>
    <iframe :src="iframeSrc" />
  </v-container>
</template>

<script>
export default {
  name: 'constitution',
  data: () => ({
    constitutionUrl: 'https://lucompsoc.github.io/constitution/constitution.pdf',
  }),
  computed: {
    /**
     * The source of the iframe displaying the PDF.
     *
     * Uses the Google Docs PDF viewer, setting the url to the constitution
     * file hosted on GitHub pages.
     */
    iframeSrc() {
      return `https://docs.google.com/viewer?url=${this.constitutionUrl}&embedded=true`;
    },
  },
}
</script>

<style lang="scss">
.constitution-page {
  iframe {
    width: 100%;
    height: calc(90vh - 120px);
  }
}
</style>
