<template>
  <div>
    <p v-if="!cartItems.length">Корзина пуста</p>
    <CartItem v-for="item of cartItems" :key="item.id_product"
              :img="imgCatalog" :cartItem="item" @remove="remove"
              :showDropCart=1></CartItem>
    <div class="total-text">
      <p>Total</p>
      <p>${{ getGrandTotal }}</p>
    </div>
    <div class="drop_button">
    <a href="#">Checkout</a>
    <router-link to="/api/cart"><a href="#">Go to cart</a></router-link>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
import CartItem from './CartItem.vue';

export default {
  name: 'CartComp',
  data() {
    return {
      cartItems: [],
    };
  },
  components: {
    CartItem,
  },
  methods: {
    ...mapMutations(['ADD_CART_ITEMS']),
    callMutation() {
      this.ADD_CART_ITEMS(this.cartItems);
    },
    addProduct(product) {
      const find = this.cartItems.find((el) => el.id_product === product.id_product);
      if (find) {
        this.$parent.$parent.putJson(`/api/cart/${find.id_product}`, { quantity: 1 });
        find.quantity += 1;
      } else {
        const prod = Object.assign(product, { quantity: 1 });
        this.$parent.$parent.postJson('/api/cart', prod)
          .then((data) => {
            if (data.result === 1) {
              this.cartItems.push(prod);
            }
          });
      }
    },
    remove(item) {
      const decrease = item;
      if (decrease.quantity > 1) {
        this.$parent.$parent.putJson(`/api/cart/${item.id_product}`, { quantity: -1 })
          .then((data) => {
            if (data.result === 1) {
              decrease.quantity -= 1;
            }
          });
      } else {
        this.$parent.$parent.deleteJson(`/api/cart/${item.id_product}`)
          .then((data) => {
            if (data.result === 1) {
              this.cartItems.splice(this.cartItems.indexOf(item), 1);
            }
          });
      }
    },
  },
  computed: {
    ...mapGetters(['imgCatalog', 'getGrandTotal']),
  },
  mounted() {
    this.callMutation();
    this.$parent.$parent.getJson('/api/cart')
      .then((data) => {
        data.contents.forEach((el) => {
          this.cartItems.push(el);
        });
      });
  },
};
</script>
