<template>
    <nav class="nav center">
      <ul class="menu">
        <!-- <li class="menu__list"><a href="#" class="menu__link">Home </a></li> -->
        <!-- <li class="menu__list"> <a href="product.html" class="menu__link">Man</a> -->
        <li class="menu__list"><router-link class="menu__link" to="/">Home</router-link></li>
        <li class="menu__list"><router-link class="menu__link" to="/products">Man</router-link>
          <div class="drop">
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
            <div class="drop__flex">
              <h3 class="drop__h3">Women</h3>
              <ul class="drop__ul">
                <li><a href="#" class="drop__link">Dresses </a></li>
                <li><a href="#" class="drop__link">Tops </a></li>
                <li><a href="#" class="drop__link">Sweaters/Knits </a></li>
              </ul>
              <h3 class="drop__h3">Women</h3>
              <ul class="drop__ul">
                <li><a href="#" class="drop__link">Dresses </a></li>
                <li><a href="#" class="drop__link">Tops </a></li>
                <li><a href="#" class="drop__link">Sweaters/Knits </a></li>
              </ul>
            </div>
          </div>
        </li>
        <li class="menu__list"><a href="#" class="menu__link">Women </a></li>
        <li class="menu__list"><a href="#" class="menu__link">Kids </a></li>
        <li class="menu__list"><a href="#" class="menu__link">Accoseriese </a></li>
        <li class="menu__list"><a href="#" class="menu__link">Featured </a></li>
        <li class="menu__list"><a href="#" class="menu__link">Hot Deals</a>
          <div class="drop drop_last">
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
            <div class="drop__flex">
              <h3 class="drop__h3">Women</h3>
              <ul class="drop__ul">
                <li><a href="#" class="drop__link">Dresses </a></li>
                <li><a href="#" class="drop__link">Tops </a></li>
                <li><a href="#" class="drop__link">Sweaters/Knits </a></li>
              </ul>
              <h3 class="drop__h3">Women</h3>
              <ul class="drop__ul">
                <li><a href="#" class="drop__link">Dresses </a></li>
                <li><a href="#" class="drop__link">Tops </a></li>
                <li><a href="#" class="drop__link">Sweaters/Knits </a></li>
              </ul>
            </div>
          </div>
        </li>
      </ul>
    </nav>
</template>

<script>
export default {
  name: 'NavComp',
};
</script>
