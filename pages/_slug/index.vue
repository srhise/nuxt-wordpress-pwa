<template>
  <section class="container">
    <div class="content">
      <h1>{{ post.title.rendered }}</h1>
      <div v-html="post.content.rendered"></div>
    </div>
    <div class="sidebar">
      <recent-posts v-if="posts" :posts="posts.data"></recent-posts>
    </div>
  </section>
</template>
<script>
import { mapGetters } from 'vuex'
import axios from 'axios'
import recentPosts from '../../components/recentPosts.vue'

export default {
  components: { recentPosts },
  async asyncData({ params }) {
    // We can use async/await ES6 feature
    let { data } = await axios.get(`https://nuxt.craftedup.com/wp-json/wp/v2/posts?slug=${params.slug}`)
    return {
      post: data[0]
    }
  },
  head() {
    return {
      title: `Nuxt WordPress | ${this.post.title.rendered}`,
      meta: [
        {
          name: 'description',
          content: 'This is the meta description of the content.'
        }
      ]
    }
  },
  data() {
    return {
      title: 'default',
      recent: [{
        title: 'One',
        href: '#hash'
      },
      {
        title: 'Two'
      },
      {
        title: 'Three'
      }]
    }
  },
  mounted() {
    this.$store.dispatch('getPosts')
  },
  computed: {
    ...mapGetters([
      'posts'
    ])
  }
}
</script>

<style>
/* layout */

.container {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  text-align: left;
  margin: 0px auto;
  line-height: 150%;
  padding: 30px;
}

.content {
  flex: 1;
}

.sidebar {
  width: 180px;
  padding: 0px 20px;
}











/* end layout */

.title {

  display: block;
  font-weight: 300;
  font-size: 36px;
  color: #35495e;
  letter-spacing: 1px;
  margin-bottom: 10px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}

p {
  margin-bottom: 10px;
}
</style>
