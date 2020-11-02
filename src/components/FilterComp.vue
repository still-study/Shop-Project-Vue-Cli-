<template>
    <form action="#" class="search-form"
    @submit.prevent="FILTER(userSearch)">
        <input type="text" placeholder="Search for Item..."
        class="search-field" v-model="userSearch">
        <button class="browse__button" type="submit">
          <img src="../../public/img/59.png" alt=""></button>
    </form>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  data() {
    return {
      userSearch: '',
    };
  },
  methods: {
    ...mapMutations(['FILTER']),
    submit() {
      this.FILTER({
        userSearch: this.userSearch,
      });
    },
  },
};
</script>
