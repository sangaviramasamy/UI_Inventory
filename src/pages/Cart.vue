<template>
  <div class="layout" style="height: 175%; background-color: white; border-radius: 6px; width: 94%; margin-left: 40px; margin-top: 20px;">
    <div class="product-list">
      <div class="image1-container" style="margin-left: 6%;">
        <div style="padding-top: 8px; font-weight: bold; font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif; padding-left: 40px;">
          <p>Products in Cart</p>
          <span><button @click="clearCart()"> Clear Cart</button></span>
        </div>

        <div v-for="(product,index) in cart" :key="index" class="image-container">
          <img :src="product.img" width="100" height="100" style="margin-top: 18px; margin-right: 50px; margin-left: 5px; padding-left: 30px;">
          <div class="image-text">{{ product.productName }}</div>
          <div class="image-text">Rs.{{ product.price }}</div>
           <span>{{ product.quantity }}</span>
           

        </div>
      </div>
    </div>
  </div>
</template>
<script src="src/pages/js/cart.js"></script>
<style>
.body{
            background-color: white;
        }
        .category {
            margin-top: 10px;
            background-color: white;
            border-radius: 6px;
            height: 86px;
            margin-left: 40px;
            margin-right: 40px;
            /* Add any category styles here */
        }
      
        .Images {
            margin-left: 135px;
            margin-right: 135px;
            /* Add any image container styles here */
        }
      
        .image-container {
            position: relative;
            display: inline-block;
        }
      
        .image-text {
          text-align: center;
          font-size: 12px;
          padding-right: 41px;
        }
        .fil{
            padding: 20px;
            width: 12%;
            float: left;
            background-color: white;
        }
</style>
