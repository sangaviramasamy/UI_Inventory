<template>
  <!-- <div v-for="(phone,index) in phones" :key="index" class="product-info" style="margin-top: 13px">
        <img class="phone-image" :src="img1" alt="Phone Image" width="150" height="200" style="margin-top: 10px"/>
        <div class="system-configuration" style="background-color: whitesmoke">
          <h2>{{ phone.productName }}</h2>
          <ul>
            <li v-for="feature in phone.features" :key="feature.id">
              {{ feature.description }}
            </li>
          </ul>
        </div>
        <div class="price" style="background-color: whitesmoke">
        
          <h5>{{ phone.quantity }}</h5>
          <button style="margin-right:3px" @click="increments(index)">+</button>
          <button style="margin-right:3px" @click="decrements(index)">-</button>
          <button style="margin-right:3px" @click="adding(phone)">Add to cart</button>
        </div>
      </div> -->


  <!-- <div class="layout" style="height: 175%;background-color: white; border-radius: 6px; width:94%;;margin-left: 40px; margin-top: 20px;">
    <div class="product-list">
        <div class="image1-container">
            <div style="padding-top: 8px; font-weight: bold;font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif; padding-left: 40px;">
                <p>Best Of Electronics</p>
            </div>
            <div class="image-container">
                <img :src="img1"   width="100" height="100" style="margin-top: 18px; margin-right: 50px; margin-left: 5px;padding-left: 30px;">
                <div class="image-text">Printers</div>
            <div class="image-text">From Rs.39999</div>
            </div>
            <div class="image-container">
                <img :src="img1" width="100" height="100" style="margin-top: 18px; margin-right: 50px; margin-left: 5px">
                <div class="image-text">Projectors</div>
                <div class="image-text">From Rs.9999</div>
            </div>
            <div class="image-container">
                <img :src="img1" width="100" height="100" style="margin-top: 18px; margin-right: 50px; margin-left: 5px">
                <div class="image-text">Best of shavers</div>
                <div class="image-text">From Rs.1640</div>
            </div>
            <div class="image-container">
                <img :src="img1"  width="100" height="100" style="margin-top: 18px; margin-right: 50px; margin-left: 5px">
                <div class="image-text">Projector</div>
                <div class="image-text">From Rs.29</div>
            </div>
            <div class="image-container">
                <img :src="img1"  width="100" height="100" style="margin-top: 18px; margin-right: 50px; margin-left: 5px">
                <div class="image-text">Monitors</div>
                <div class="image-text">From Rs.6599</div>
            </div>
            <div class="image-container">
                <img :src="img1"   width="100" height="100" style="margin-top: 18px; margin-right: 50px; margin-left: 5px">
                <div class="image-text">Laptop</div>
                <div class="image-text">From Rs.35000</div>
            </div>
            <div class="image-container">
                <img :src="img1" width="100" height="100" style="margin-top: 18px; margin-right: 50px; margin-left: 5px">
                <div class="image-text">Projector</div>
                <div class="image-text">From Rs.29</div>
            </div>
            <div class="image-container">
                <img :src="img1"   width="100" height="100" style="margin-top: 18px; margin-right: 50px; margin-left: 5px">
                <div class="image-text">Monitors</div>
                <div class="image-text">From Rs.6599</div>
            </div>
            <div class="image-container">
                <img :src="img1"  width="100" height="100" style="margin-top: 18px; margin-right: 50px; margin-left: 5px">
                <div class="image-text">Laptop</div>
                <div class="image-text">From Rs.35000</div>
            </div>
            <div class="image-container">
                <img :src="img1"   width="100" height="100" style="margin-top: 18px; margin-right: 50px; margin-left: 5px">
                <div class="image-text">Monitors</div>
                <div class="image-text">From Rs.6599</div>
            </div>
            <div class="image-container">
                <img :src="img1" width="100" height="100" style="margin-top: 18px; margin-right: 50px; margin-left: 5px">
                <div class="image-text">Laptop</div>
                <div class="image-text">From Rs.35000</div>
            </div>
            <div class="image-container">
                <img :src="img1" width="100" height="100" style="margin-top: 18px; margin-right: 50px; margin-left: 5px">
                <div class="image-text">Projector</div>
                <div class="image-text">From Rs.29</div>
            </div>
            <div class="image-container">
                <img :src="img1" width="100" height="100" style="margin-top: 18px; margin-right: 50px; margin-left: 5px">
                <div class="image-text">Monitors</div>
                <div class="image-text">From Rs.6599</div>
            </div>
            <div class="image-container">
                <img :src="img1"   width="100" height="100" style="margin-top: 18px; margin-right: 50px; margin-left: 5px">
                <div class="image-text">Monitors</div>
                <div class="image-text">From Rs.6599</div>
            </div>
             
           
        </div>
      
    </div>
     
    
  </div> -->


  <div class="layout" style="height: 175%; background-color: white; border-radius: 6px; width: 94%; margin-left: 40px; margin-top: 20px;" v-if="showAll">
    <div class="product-list">
      <div class="image1-container" style="margin-left: 6%;">
        <div style="padding-top: 8px; font-weight: bold; font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif; padding-left: 40px;">
          <p>Best Of Electronics</p>
        </div>

        <div v-for="(product,index) in products" :key="index" class="image-container" style="    margin-right: 2%;">
          <img :src="product.img" width="100" height="100" style="margin-top: 18px; margin-right: 50px; margin-left: 5px; padding-left: 30px;">
          <div class="image-text">{{ product.productName }}</div>
          <div class="image-text">Rs.{{ product.price }}</div>
         
          <button style="margin-left: 5px;" @click="increments(index)">+</button>
           <span style="margin-left: 5px;margin-right: 5px;" >{{ product.quantity }}</span>
          <button style="margin-right:3px" @click="decrements(index)">-</button>
          <button  style="margin-left: 22px;" @click="addtocart(product)">Add to Cart</button>

        </div>
      </div>
    </div>
  </div>

  <div class="layout" style="height: 175%; background-color: white; border-radius: 6px; width: 94%; margin-left: 40px; margin-top: 20px;" v-else>
    <div class="product-list">
      <div class="image1-container" style="margin-left: 6%;">
        <div style="padding-top: 8px; font-weight: bold; font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif; padding-left: 40px;">
          <p>Best Of Electronics</p>
        </div>

        <div v-for="(product,index) in filteredList" :key="index" class="image-container" style="    margin-right: 2%;">
          <img :src="product.img" width="100" height="100" style="margin-top: 18px; margin-right: 50px; margin-left: 5px; padding-left: 30px;">
          <div class="image-text">{{ product.productName }}</div>
          <div class="image-text">Rs.{{ product.price }}</div>
         
          <button style="margin-left: 5px;" @click="increments(index)">+</button>
           <span style="margin-left: 5px;margin-right: 5px;" >{{ product.quantity }}</span>
          <button style="margin-right:3px" @click="decrements(index)">-</button>
          <button  style="margin-left: 22px;" @click="addtocart(product)">Add to Cart</button>

        </div>
      </div>
    </div>
  </div>
</template>
<script src="./js/product.js"></script>
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
