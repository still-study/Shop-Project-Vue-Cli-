<template>
  <div id="app">
    <HeaderComp />
    <NavComp/>
    <!-- <div id="nav"> -->
      <!-- <router-link to="/">Home</router-link> | -->
      <!-- <router-link to="/about">About</router-link> -->
    <!-- </div> -->
    <router-view/>
    <FooterComp/>
  </div>
</template>

<script>
import HeaderComp from '@/components/HeaderComp.vue';
import FooterComp from '@/components/FooterComp.vue';
import NavComp from '@/components/NavComp.vue';

export default {
  components: {
    HeaderComp,
    FooterComp,
    NavComp,
  },
};
</script>
