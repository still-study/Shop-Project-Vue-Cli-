export default {
  actions: {
  },

  mutations: {
    ADD_CART_ITEMS(state, data) {
      state.cartItems = data;
    },
  },

  state: {
    cartItems: [],
  },

  getters: {
    getCartItems({ cartItems }) {
      return cartItems;
    },
    getGrandTotal({ cartItems }) {
      let total = 0;
      cartItems.forEach((el) => {
        const sum = el.price * el.quantity;
        total += sum;
      });
      return total;
    },
  },
};
