<template>

  <div class="wrapper-content wrapper-content--fixed">
    <section>
      <div class="container">
        <h1>Shop Page</h1>
        <div class="item__wrapper">
          <shopItem
              v-for="product in shopList"
              :key="product.id"
              :product="product"
          />
        </div>
      </div>
    </section>
  </div>

</template>

<script>

import shopItem from '../components/ShopItem.vue';

export default {
  components: {
    shopItem,
  },

  name: 'Shop',

  data: () => ({
    shopList: null,
  }),

  created() {
    this.shopList = this.$store.getters.gerShopList;
    console.log(this.shopList);
  }
};
</script>
