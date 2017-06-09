<template>
  <ul id="example-1">
    <li v-for="item in posts">
      <nuxt-link :to="slugToUrl(item.slug)">{{ item.title }}</nuxt-link>
    </li>
  </ul>
</template>

<script>

export default {
  props: ['posts'],
  methods: {
    slugToUrl (slug) {
      return `/${slug}`
    }
  }
}
</script>

<style>

</style>
