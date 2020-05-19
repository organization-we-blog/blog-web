<template>
  <v-md-preview
    :text="text"
    :theme="theme"
  />
</template>

<script>
  import VMdPreview from '@kangc/v-md-editor/lib/preview'
  import '@kangc/v-md-editor/lib/style/preview.css'
  import vuepressTheme from '@kangc/v-md-editor/lib/theme/vuepress.js'
  import 'prismjs/components/prism-json';
  import 'prismjs/components/prism-java';
  import 'prismjs/components/prism-c';
  export default {
    name: "Preview",
    components: {
      [VMdPreview.name]: VMdPreview
    },
    data () {
      this.theme = vuepressTheme;
      return {
      }
    },
    props: {
      text: {
        Type: String,
        Default: " "
      }
    }
  }
</script>

<style scoped>

</style>
