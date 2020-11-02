<template>
    <div class="card">
        <img class="product__img" :src="img + product.img_name" alt="Some img"
        @click="goToDetails(product.id_product)">
        <div class="product__content">
            <p class="product__name"
            @click="goToDetails(product.id_product)">{{product.product_name}}</p>
            <p class="product__price">${{product.price}}</p>
        </div>
        <p class="product__add"
        @click="$root.$children[0].$children[0].$children[2].addProduct(product)">
        Add to Cart</p>
    </div>
</template>

<script>

export default {
  props: ['product', 'img'],
  name: 'ProductComp',
  methods: {
    goToDetails(currentId) {
      this.$router.push({ name: 'Details', params: { id: currentId } });
    },
  },
};
</script>
