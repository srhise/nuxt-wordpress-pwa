<template>
  <div class="categories-menu">
    <div>
       <a href="https://github.com/srhise/nuxt-wordpress-pwa" rel="noopener">github</a>
    </div>
    <div>
       <nuxt-link to="/">home</nuxt-link>
    </div>
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

<style lang="scss" scoped>
.categories-menu {
    width:100%;
    color:#fff;
    display: flex;
    justify-content:space-around;
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
    a.nuxt-link-exact-active {
      background-color: #fff;
      color:#444;
    }
}


</style>
