export default {
  actions: {
  },

  mutations: {
    UPDATE_PRODUCTS(state, data) {
      data.forEach((el) => {
        state.products.push(el);
        state.filtered.push(el);
      });
    },
    FILTER(state, userSearch) {
      const regexp = new RegExp(userSearch, 'i');
      state.filtered = state.products.filter((el) => regexp.test(el.product_name));
    },
  },
  state: {
    products: [],
    filtered: [],
    imgCatalog: '/img/',
  },
  getters: {
    filtered(state) {
      return state.filtered;
    },
    products(state) {
      return state.products;
    },
    imgCatalog(state) {
      return state.imgCatalog;
    },
  },
};
