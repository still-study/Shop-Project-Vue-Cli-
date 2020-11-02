<template>
  <div>
    <div class="shopping_cart center">
      <div class="header_cart">
        <h3>Product Details</h3>
        <div class="header_cart_item">
          <h3>unite Price</h3>
          <h3>Quantity</h3>
          <h3>shipping</h3>
          <h3>Subtotal</h3>
          <h3>ACTION</h3>
        </div>
      </div>
      <div class="cart">
        <CartItem v-for="item of getCartItems" :key="item.id_product"
        :img="imgCatalog" :cartItem="item"></CartItem>
      </div>
        <div class="cart_button">
          <a href="#">cLEAR SHOPPING CART</a>
          <a href="#">cONTINUE sHOPPING</a>
        </div>
    </div>
    <div class="create_order center">
      <div class="shipping_adress">
        <h3>Shipping Adress</h3>
        <form class="adress_form">
          <label class="select__country">
            <select>
              <option>Bangladesh</option>
              <option>Russia</option>
              <option>China</option>
              <option>USA</option>
            </select>
          </label>
          <label>
            <input class="state" type="text" placeholder="State">
          </label>
          <label>
            <input class="postcode" type="text" placeholder="Postcode / Zip">
          </label>
          <button>get a quote</button>
        </form>
      </div>
      <div class="discount">
        <h3>coupon  discount</h3>
        <p>Enter your coupon code if you have one</p>
        <label>
          <input class="state" type="text" placeholder="State">
        </label>
        <button>Apply coupon</button>
      </div>
      <div class="checkout">
        <div class="checkout_total">
          <p class="sub">sub total<span>${{ getGrandTotal }}</span></p>
          <p class="grand">GRAND TOTAL<span>${{ getGrandTotal }}</span></p>
        </div>
        <a href="#">proceed to checkout</a>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';
import CartItem from './CartItem.vue';

export default {
  props: ['cartItem', 'img'],
  name: 'CartDetailsComp',
  components: {
    CartItem,
  },
  computed: {
    ...mapGetters(['getCartItems', 'imgCatalog', 'getGrandTotal']),
  },
};
</script>
