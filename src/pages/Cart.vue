<template>
  <div class="layout" style="height: 175%; background-color: white; border-radius: 6px; width: 94%; margin-left: 40px; margin-top: 20px;">
    <div class="product-list">
      <div class="image1-container" style="margin-left: 6%;">
       
<div class="producthead">
  <p style="margin: 0;">PRODUCTS IN CART</p>
  <button @click="clearCart()" class="delbtn">Clear Cart</button>
  <span><i class="material-icons">delete</i></span>
</div>

        <div v-for="(product,index) in cart" :key="index" class="image-container">
          <img :src="img1" width="100" height="100" style="margin-top: 18px; margin-right: 50px; margin-left: 5px; padding-left: 30px;">
          <div class="image-text">{{ product.productName }}</div>
          <div class="image-text">Rs.{{ product.price }}</div>
           <span style="    margin: 20%;">Quantity :  {{ product.quantity }}</span>
           <br><br>
          <span><button @click="placeorder()" class="placeorderbtn" style="    margin-left: 20%;">Place Order</button></span>
        </div>
      </div>
    </div>
  </div>
</template>
<script src="./js/cart.js"></script>
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
        .delbtn{
                  cursor: pointer;
    font-size: 100%;
    border: none;
    background-color: white;
    margin-left: auto;
        }
        .producthead{
          display: flex; 
          align-items: center; 
          padding-top: 8px; 
          font-weight: bold; 
          font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif; 
          padding-left: 40px;
        }
        .placeorderbtn{
          padding: 5%;
    margin: 5%;
    border: none;
    background-color: #CDCFCB;
        }
        .placeorderbtn:hover{
          background-color: #627D46;
        }
</style>
