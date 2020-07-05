<template>
    <div class="card" @click="goToDetails(product.id_product)">
        <img class="product__img" :src="img + product.img_name" alt="Some img">
        <div class="product__content">
            <a href="#" class="product__name">{{product.product_name}}</a>
            <p class="product__price">${{product.price}}</p>
        </div>
        <a href="" class="product__add">Add to Cart</a>
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
