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
        <img src="../../public/img/cart.png" alt="cart">
      <div class="cart__drop">
    <div class="order-position">
      <a href="#">
        <img class="img__order-position" src="../../public/img/1821.png" alt="">
      </a>
      <div class="text__order-position">
      <a href="#"><h3>Rebox Zane</h3></a>
      <i class="fas fa-star"></i>
      <i class="fas fa-star"></i>
      <i class="fas fa-star"></i>
      <i class="fas fa-star"></i>
      <i class="fas fa-star-half-alt"></i>
      <p>1 x $250</p></div>
      <div class="order__circle"><a href="#"><i class="fas fa-times-circle"></i></a></div>
    </div>
    <div class="order-position">
      <a href="#">
        <img class="img__order-position" src="../../public/img/1821.png" alt="">
      </a>
      <div class="text__order-position">
        <a href="#"><h3>Rebox Zane</h3></a>
      <i class="fas fa-star"></i>
      <i class="fas fa-star"></i>
      <i class="fas fa-star"></i>
      <i class="fas fa-star"></i>
      <i class="fas fa-star-half-alt"></i>
      <p>1 x $250</p></div>
      <div class="order__circle"><a href="#"><i class="fas fa-times-circle"></i></a></div>
    </div>
    <div class="total-text">
      <p>Total</p>
      <p>$500.00</p>
    </div>
    <div class="drop_button">
    <a href="#">Checkout</a>
    <a href="#">Go to cart</a>
    </div>
    </div>
      </div><a class="button" href="#">My account<img src="../../public/img/1109.png" alt=""></a>
    </div>
  </header>
</template>

<script>
import FilterComp from './FilterComp.vue';

export default {
  name: 'HeaderComp',
  components: {
    FilterComp,
  },
  data() {
    return {
      showCart: false,
    };
  },
};
</script>
