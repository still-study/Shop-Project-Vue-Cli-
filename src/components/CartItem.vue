<template>
  <div>
    <div v-if="showDropCart===1" class="order-position">
      <a href="#">
        <img class="img__order-position" :src="img + cartItem.img_name" alt="Some img">
      </a>
      <div class="text__order-position">
        <a href="#"><h3>{{cartItem.product_name}}</h3></a>
      <i class="fas fa-star"></i>
      <i class="fas fa-star"></i>
      <i class="fas fa-star"></i>
      <i class="fas fa-star"></i>
      <i class="fas fa-star-half-alt"></i>
      <p>{{cartItem.quantity}} x ${{cartItem.price}}</p></div>
      <div class="order__circle">
        <i class="fas fa-times-circle" @click="$emit('remove', cartItem)"></i></div>
    </div>
    <div v-else>
      <div class="cart_item">
          <div class="product_position">
            <a href="#"><img :src="img + cartItem.img_name" alt="img_cart"></a>
            <div class="position_property">
              <a href="#"><h3>{{cartItem.product_name}}</h3></a>
              <p>Color: <span>Red</span><br>Size: <span>Xll</span></p>
            </div>
          </div>
          <div class="cart_position_item">
            <p>${{cartItem.price}}</p>
            <label>
              <input class="cart_quantity" type="text" :value="cartItem.quantity">
            </label>
            <p>free</p>
            <p>${{ cartItem.price * cartItem.quantity }}</p>
            <div class="order__circle"><a href="#"><i class="fas fa-times-circle"
            @click="$root.$children[0].$children[0].$children[2].remove(cartItem)"></i></a></div>
          </div>
        </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';

export default {
  props: ['cartItem', 'img', 'showDropCart'],
  name: 'CartItem',
  computed: {
    ...mapGetters(['getSubTotal']),
  },
};
</script>
