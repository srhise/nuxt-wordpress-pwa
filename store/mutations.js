export default {
  PAGE: (state, page) => {
    state.page = page;
  },
  POSTS: (state, posts) => {
    state.posts = posts;
  },
  POST: (state, post) => {
    state.post = post;
  },
  CATEGORY: (state, category) => {
    state.category = category;
  },
  CATEGORIES: (state, categories) => {
    state.categories = categories;
  }
};
