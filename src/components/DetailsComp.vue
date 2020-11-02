<template>
<div>
  <div v-for="product of products" :key="product.id_product">
      <div v-if="pathId == product.id_product">
  <div class="breadcrumb center">
        <h2 class="header__breadcrumb">new arrivals</h2>
        <ul class="ul__breadcrumb">
            <a href="index.html" class="link__breadcrumb">
                <li class="list__breadcrumb">Home /</li>
            </a>
            <a href="product.html" class="link__breadcrumb">
                <li class="list__breadcrumb">Men /</li>
            </a>
            <li class="list__breadcrumb">New Arrivals</li>
        </ul>
    </div>
    <div class="slider"> <a href="#" class="slider_arrow"><i class="fas fa-angle-left"></i></a>
    <img class="product__img" :src="imgCatalog + product.img_name" alt="Some img">
    <a href="#" class="slider_arrow"><i class="fas fa-angle-right"></i></a> </div>
    <section class="product_description">
        <h2>Men collection</h2>
        <div class="border-h3"></div>
        <h3>{{product.product_name}}</h3>
        <p class="main-description">Compellingly actualize fully researched
          processes before proactive outsourcing. Progressively syndicate
          collaborative architectures before cutting-edge services. Completely
          visualize parallel core competencies rather than exceptional portals.</p>
        <div class="p-description">
            <p>MATERIAL: <span>COTTON</span></p>
            <p>DESIGNER: <span>BINBURHAN</span></p>
        </div>
        <p class="description-price">$<span>{{product.price}}</span></p>
        <div class="description-order">
            <div class="choose_color">
                <h3>CHOOSE COLOR</h3>
                <label class="description__filter">
                    <select>
                        <option>Red</option>
                        <option>Green</option>
                        <option>Blue</option>
                    </select>
                </label>
            </div>
            <div class="choose_size">
                <h3>CHOOSE SIZE</h3>
                <label class="description__filter">
                    <select>
                        <option>XXL</option>
                        <option>S</option>
                        <option>M</option>
                    </select>
                </label>
            </div>
            <div class="quantity">
                <h3>QUANTITY</h3>
                <label class="description__filter">
                    <select>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                    </select>
                </label>
            </div>
            <a class="description-add" href="#">
              <img src="/img/2587.png" alt="cart_pink" >Add to Cart</a>
        </div>
    </section>
    <div class="like_also center">
       <h3 class="like_also_h3">you may like also</h3>
       <div class="card_also">
            <div class="also_img">
                <a href="#"><img src="/img/2781.png" alt="photo product 1"></a>
            </div>
            <div class="product__content">
              <a href="" class="product__name">Mango People T-shirt </a>
                <p class="product__price">$52.00</p>
            </div> <a href="" class="product__add">Add to Cart</a> </div>
        <div class="card_also">
            <div class="also_img">
                <a href="#"><img src="/img/2782.png" alt="photo product 1"></a>
            </div>
            <div class="product__content">
              <a href="" class="product__name">Mango People T-shirt </a>
                <p class="product__price">$52.00</p>
            </div> <a href="" class="product__add">Add to Cart</a> </div>
        <div class="card_also">
            <div class="also_img">
                <a href="#"><img src="/img/2783.png" alt="photo product 1"></a>
            </div>
            <div class="product__content">
              <a href="" class="product__name">Mango People T-shirt </a>
                <p class="product__price">$52.00</p>
            </div> <a href="" class="product__add">Add to Cart</a> </div>
        <div class="card_also">
            <div class="also_img">
                <a href="#"><img src="/img/2772.png" alt="photo product 1"></a>
            </div>
            <div class="product__content">
              <a href="" class="product__name">Mango People T-shirt </a>
                <p class="product__price">$52.00</p>
            </div> <a href="" class="product__add">Add to Cart</a> </div>
    </div>
</div>
</div>
</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'MoreDetails',
  data() {
    return {
      pathId: this.$route.params.id,
    };
  },
  methods: {
    ...mapActions(['getJson']),
  },
  computed: mapGetters(['filtered', 'products', 'imgCatalog']),
  mounted() {
    this.getJson('/api/products');
  },
};
</script>
