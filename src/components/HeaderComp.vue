<template>
  <header class="header center">
    <div class="header__left">
      <router-link class="logo" to="/">
      <img class="logo__img" src="../../public/img/logo.png" alt="logo">BRAN<span>D</span>
      </router-link>
      <form class="header__form" action="#">
        <details class="browse">
          <summary class="browse-summary">Browse</summary>
          <div class="drop drop__browse">
            <div class="drop__flex">
              <h3 class="drop__h3">Women</h3>
              <ul class="drop__ul">
                <li><a href="#" class="drop__link">Dresses </a></li>
                <li><a href="#" class="drop__link">Tops </a></li>
                <li><a href="#" class="drop__link">Sweaters/Knits </a></li>
                <li><a href="#" class="drop__link">Jackets/Coats </a></li>
                <li><a href="#" class="drop__link">Blazers Denim </a></li>
                <li><a href="#" class="drop__link">Leggings/Pants </a></li>
                <li><a href="#" class="drop__link">Skirts/Shorts </a></li>
                <li><a href="#" class="drop__link">Accessories</a></li>
              </ul>
            </div>
          </div>
        </details>
        <FilterComp/>
      </form>
    </div>
    <div class="header__right">
      <div class="header__cart">
        <img src="../../public/img/cart.png" alt="cart" @click="showCart = !showCart">
      <div class="cart__drop" v-show="showCart">
        <CartComp/>
    </div>
      </div><a class="button" href="#">My account<img src="../../public/img/1109.png" alt=""></a>
    </div>
  </header>
</template>

<script>
import FilterComp from './FilterComp.vue';
import CartComp from './CartComp.vue';

export default {
  name: 'HeaderComp',
  data() {
    return {
      showCart: false,
    };
  },
  components: {
    FilterComp,
    CartComp,
  },
};
</script>
