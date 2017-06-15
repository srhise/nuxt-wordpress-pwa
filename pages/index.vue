<template>
  <div>
    <section class="header">
      <categories :categories="categories"></categories>
      <img class="logo" src="~assets/logo.svg">

      <h2 class="subtitle">
        WordPress as a Progressive Web App
      </h2>
    </section>
    <section class="container">
      <div>
        <div class="content">
          <post-list v-if="posts" :posts="posts" title="Recent Posts"></post-list>
        </div>
      </div>
    </section>
  </div>
</template>

<script>

import { mapGetters } from 'vuex'
import api from "../api/index";
import postList from '../components/postList.vue'
import recentPosts from '../components/recentPosts.vue'
import categories from '../components/categories.vue'

export default {
  components: { postList, categories, recentPosts },
  async asyncData({ params }) {
    // We can use async/await ES6 feature
    let { data } = await api.getPosts()

    return {
      posts: data
    }
  },
  head() {
    return {
      title: `Nuxt WordPress | Home`,
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
      title: 'default'
    }
  },
  mounted() {
    if (this.categories.length === 0) {
      this.$store.dispatch('getCategories')
    }
  },
  computed: {
    ...mapGetters([
      'categories'
    ])
  }
}
</script>

<style>

.header {
  background-color:#1e5799;
  background-image: linear-gradient(to right, #34495F, #3A5674);
  text-align: center;
}
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding-top:60px;
}

.content {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  text-align: left;
  margin: 0px auto;
  line-height: 150%;
  padding: 0px 30px 30px 30px;
  max-width:1000px;
}

.title {
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
  font-size: 28px;
  color: #fff;
  padding-bottom: 15px;
  padding-left:5px;
  text-align:center;
}

.links {
  padding-top: 15px;
}

/* Smartphones (portrait and landscape) ----------- */
@media only screen 
and (min-device-width : 320px) 
and (max-device-width : 480px) {

  .title {
    font-size: 26px;
    line-height:36px;
    padding:40px 10px 0px;
  }
  .subtitle {
    font-size: 22px;
    line-height:26px;
    padding:5px 10px 15px;
  }
  h3 {
    font-size: 34px;
    font-weight: 700;
    line-height: 44px;
  }

}
</style>
