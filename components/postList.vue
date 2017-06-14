<template>
  <div>
    <div class="post" v-for="item in posts">
        <h3><nuxt-link :to="slugToUrl(item.slug)">{{ item.title }}</nuxt-link></h3>
        <div v-html="item.excerpt"></div>
        <strong class="more"><nuxt-link :to="slugToUrl(item.slug)">read more</nuxt-link></strong>
    </div>
  </div>
</template>

<script>

export default {
  props: ['posts', 'title'],
  methods: {
    slugToUrl(slug) {
      return `/${slug}`
    }
  }
}
</script>

<style>
.post {
  margin-bottom:20px;
}
h3 {
  font-size:54px;
  font-weight:bold;
  line-height: 64px;
}
h3 a {
  text-decoration: none;
  color:#444;
}
p {
  font-size:24px;
  line-height: 150%;
}
.link-more {
    display:none;
}

.more a {
  font-size:22px;
  color:#1e5799;
}

</style>
