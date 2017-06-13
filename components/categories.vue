<template>
  <div class="categories-menu">
    <div v-for="item in categories">
      <nuxt-link :to="slugToUrl(item.slug)">{{ item.name }}</nuxt-link>
    </div>
  </div>
</template>
<script>
export default {
  props: ['categories'],
  methods: {
    slugToUrl(slug) {
      return `/category/${slug}`
    }
  }
}
</script>

<style scoped>
.categories-menu {
    position:fixed;
    width:100%;
    background-color:#444;
    color:#fff;
    display: flex;
    justify-content:space-around;
}

a {
    color:#fff;
    text-decoration:none;
    padding:10px 10px;
    display: inline-block;
}

a:hover {
    color:#444;
    background-color:#fff;
}
</style>
