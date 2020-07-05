export default {
  actions: {
    async getJson({ commit }) {
      // const res = await fetch('https://raw.githubusercontent.com/still-study/api/master/products.json')
      const res = await fetch('/products')
        .catch((error) => {
          console.log(error);
        // this.$refs.error.setError(error);
        });
      const products = await res.json();
      commit('updateProducts', products);
    },
  },
  mutations: {
    updateProducts(state, products) {
      state.products = products;
      state.filtered = products;
    },
    filter(state, userSearch) {
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
