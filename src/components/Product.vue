<template>
  <div class="layout" style="height: 175%; background-color: white; border-radius: 6px; width: 94%; margin-left: 40px; margin-top: 20px;" v-if="showAll">
    <div class="product-list">
      <div class="image1-container" style="margin-left: 15%;">
        <div style="padding-top: 8px; font-weight: bold; font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;">
          <p>Best Of Products</p>
        </div>

        <div v-for="(product,index) in products" :key="index" class="image-container" style="border: 2px solid #a09a9a;
    border-radius: 12px;
    padding: 5px;
    margin-right: 4%;margin-top: 2%;margin-bottom: 4%;box-shadow: 8px 10px #D8D4D4">
          <img :src="img1" width="100" height="100" style="margin-top: 18px; margin-right: 50px; margin-left: 5px; padding-left: 30px;">
          <span style="float: right;"><button class="updatebtn" @click="Update(index)"><i class="fa fa-edit"></i></button></span>
          <div class="image-text">{{ product.name }}</div>
          <div class="image-text">Rs.{{ product.price }}</div>
         
          <div class="incdec">
            <i class="fa fa-plus-circle incbtn" @click="increments(index)"></i>
            <span style="margin-left: 5px; margin-right: 5px;padding-left: 6%;">{{ product.quantity }}</span>
            <i class="fa fa-minus-circle decbtn"  @click="decrements(index)"></i>
          </div>
          
           <br>
          
          <button class="cartbtn" @click="addtocart(product)">
            Add to Cart  <i class="fa fa-shopping-cart"></i>
          </button>


        </div>
      </div>
    </div>
  </div>

  <div class="layout" style="height: 175%; background-color: white; border-radius: 6px; width: 94%; margin-left: 40px; margin-top: 20px;" v-else>
    <div class="product-list">
      <div class="image1-container" style="margin-left: 15%;">
        <div style="padding-top: 8px; font-weight: bold; font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;">
          <p>FILTERED PRODUCTS </p>
        </div>

        <div v-for="(product,index) in filteredProductsList" :key="index" class="image-container" style="border: 2px solid #a09a9a;
    border-radius: 12px;
    padding: 5px;
    margin-right: 4%;margin-top: 2%;margin-bottom: 4%;box-shadow: 8px 10px #D8D4D4">
    
          <img :src="img1" width="100" height="100" style="margin-top: 18px; margin-right: 50px; margin-left: 5px; padding-left: 30px;">
          <span style="float: right;"><button class="updatebtn" @click="Update(index)"><i class="fa fa-edit"></i></button></span>
          <div class="image-text">{{ product.name }}</div>
          <div class="image-text">Rs.{{ product.price }}</div>
         
          <div class="incdec">
            <i class="fa fa-plus-circle incbtn" @click="increments(index)"></i>
            <span style="margin-left: 5px; margin-right: 5px;padding-left: 6%;">{{ product.quantity }}</span>
            <i class="fa fa-minus-circle decbtn"  @click="decrements(index)"></i>
          </div>
          
           <br>
          
          <button class="cartbtn" @click="addtocart(product)">
            Add to Cart  <i class="fa fa-shopping-cart"></i>
          </button>


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
        }
      
        .Images {
            margin-left: 135px;
            margin-right: 135px;
        }
      
        .image-container {
            position: relative;
            display: inline-block;
        }
      
        .image-text {
          margin-left: 15%;
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
        .incdec {
          margin-left: 10px;
    border: none;
    border-radius: 12px;
    background-color: white;
    padding: 5px;
    display: inline-block;
    width: 84%;
    transition: background-color 0.3s; /* Add smooth transition for background color */
    
  }

  .incdec:hover {
    background-color: #E3E5E3; 
  }

.incbtn{
  margin-left: 5px; 
  color: #6E926E; 
  cursor: pointer;
  padding-left: 18%;
}
.incbtn:hover {
  color:  green;
}
.decbtn{
  margin-right: 3px; 
  color: #B85B66;
  cursor: pointer;
  padding-left: 8%;
}
.decbtn:hover{
  color:red;
}
.updatebtn{
      margin-left: -33px;
    margin-right: -2px;
    margin-top: 1px;
    border: none;
    font-size: 119%;
    border-color: white;
    border:none;
    background-color: white;
    cursor: pointer;
}
.cartbtn{
    margin-top: 10px;
    border: none;
    background-color: #E3E5E3;
    margin-left: 8px;
    border-radius: 27px;
    padding: 4% 15% 4% 15%;
    cursor: pointer;

}
.cartbtn:hover {
    background-color: #4CAF50; /* Green background on hover */
    color: white; /* White text on hover */
  }
</style>
