import api from "../api/index";

export const getPage = ({ commit, state }, slug) => {
  return new Promise((resolve, reject) => {
    api.getPage(slug).then(
      response => {
        commit("PAGE", response);
        resolve(response);
      },
      response => {
        reject(response);
      }
    );
  });
};

export const getPost = ({ commit, state }, slug) => {
  return new Promise((resolve, reject) => {
    api.getPost(slug).then(
      response => {
        commit("POST", response);
        resolve(response);
      },
      response => {
        reject(response);
      }
    );
  });
};

export const getPosts = ({ commit, state }) => {
  return new Promise((resolve, reject) => {
    api.getPosts().then(
      response => {
        commit("POSTS", response);
        resolve(response);
      },
      response => {
        reject(response);
      }
    );
  });
};

export const getCategory = ({ commit, state }, slug) => {
  return new Promise((resolve, reject) => {
    api.getCategory(slug).then(
      response => {
        commit("CATEGORY", response);
        resolve(response);
      },
      response => {
        reject(response);
      }
    );
  });
};

export const getCategories = ({ commit, state }, slug) => {
  return new Promise((resolve, reject) => {
    api.getCategories(slug).then(
      response => {
        commit("CATEGORIES", response);
        resolve(response);
      },
      response => {
        reject(response);
      }
    );
  });
};
