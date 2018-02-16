<template>
  <div>
    <section class="header">
      <categories :categories="categories"></categories>
      <h1 class="page-title">{{ post.title.rendered }}</h1>
    </section>
    <section class="post-container">
      <div class="post-content">
        <h3>{{post.title.rendered}}</h3>
        <div v-html="post.content.rendered"></div>
      </div>
      <div class="sidebar">
        <recent-posts v-if="posts" :posts="posts.data"></recent-posts>
      </div>
    </section>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import axios from 'axios'
import config from "../../api/config";
import recentPosts from '../../components/recentPosts.vue'
import categories from '../../components/categories.vue'

export default {
  components: { recentPosts, categories },
  async asyncData({ params }) {
    // We can use async/await ES6 feature
    let { data } = await axios.get(config.baseUrl + `posts?slug=${params.slug}`)
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
    this.$store.dispatch('getCategories')
  },
  computed: {
    ...mapGetters([
      'posts',
      'categories'
    ])
  }
}
</script>

<style>
/* layout */

.header {
  background-color:#1e5799;
  background-image: linear-gradient(to right, #34495F, #3A5674);
  text-align: center;
}

.page-title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  /* 1 */
  display: block;
  font-weight: bold;
  font-size: 100px;
  color: #fff;
  letter-spacing: 1px;
  font-size: 52px;
  padding:50px 5px 0px 5px;
  text-align:center;
}

.subtitle {
  font-weight: 300;
  font-size: 32px;
  color: #fff;
  word-spacing: 5px;
  padding-bottom: 15px;
  padding-left:5px;
  text-align:center;
}

.post-container {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  text-align: left;
  margin: 0px auto;
  line-height: 150%;
  padding: 60px 30px 30px 30px;
  max-width: 1000px;
  margin: 0px auto;
}

.post-content {
  flex: 1;
}

.post-content img {
  max-width: 100%;
  height: auto;
  margin: 10px 0px;
}

.sidebar {
  width: 180px;
  padding: 0px 20px;
}

/* end layout */


.links {
  padding-top: 15px;
}

p {
  margin-bottom: 10px;
}

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

/* Smartphones (portrait and landscape) ----------- */
@media only screen 
and (min-device-width : 320px) 
and (max-device-width : 480px) {
  
  .title {
    font-size: 22px;
    line-height:44px;
  }

  .sidebar {
    display: none;
  }

}
</style>
