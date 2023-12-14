<template>
<div class="layout small-layout" style="background-color: white; height: 55px;">
       
    <div class="search-bar" style="margin-left: 70px;">
         <span class="input-group-text border-0" id="search-addon">

  </span>
   

        <input ref="input" type="text" placeholder="Search for products, brands, and more..." style="width: 585px; margin-top: 12px; margin-left: 4px; border-radius: 9px; height: 38px;">
 
        
        <button @click="pageChange()" style="margin-right: 3%;margin-left: 43%;"> Cart <span>{{cart.length}}</span></button>
        <button @click="pageChange2()">Product</button>
        <!-- <a href="#" style="margin-left: 20px;"><i class="fas fa-shopping-cart" style="margin-right: 5px;"></i>Products</a> -->
    </div>

     
</div>
</template>
<script src="./js/header.js">
 
</script>
<style lang="scss" scoped>
@import '@blibli/blue-design-tokens/dist/tokens-default.scss';
body {
    margin: 0;
    font-family: Arial, sans-serif;
    background-color: whitesmoke;
}
input{
  margin-top: 11px;
}
.container {
    // max-width: 1200px;
    margin: 20px auto;
}

.filters {
    float: left;
    /* width: 30%; Adjust as needed */
    padding: 20px;
    border-right: 1px solid #ddd;
    width: 225px;
    height: 660px;
}

.product-info {
    overflow: hidden; /* Clear the float */
    padding: 20px;
    margin-bottom: 20px;
    position: relative;
}

.phone-image {
    max-width: 100%;
    height: auto;
    display: block; /* Prevents unwanted space at the bottom */
    margin-bottom: 10px;
}

.system-configuration {
    /* background-color: whitesmoke;*/
    background: rgba(255, 255, 255, 0.8); 
    position: absolute;
    top: 26px;
    right: 274px;
    background: rgba(255, 255, 255, 0.8);
    padding: 10px;
    padding-right: 450px;
}

.price {
    position: absolute;
    top: 20px;
    right: 151px;
    background: rgba(255, 255, 255, 0.8);
    padding: 10px;
    font-weight: bold;
    color: green;
}
li{
    letter-spacing: 2px;
    font-size: small;
}

/* The container */
.container {
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 15px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

/* Hide the browser's default checkbox */
.container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

/* Create a custom checkbox */
.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 25px;
  width: 25px;
  background-color: #eee;
}

/* On mouse-over, add a grey background color */
.container:hover input ~ .checkmark {
  background-color: #ccc;
}

/* When the checkbox is checked, add a blue background */
.container input:checked ~ .checkmark {
  background-color: #2196F3;
}

/* Create the checkmark/indicator (hidden when not checked) */
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

/* Show the checkmark when checked */
.container input:checked ~ .checkmark:after {
  display: block;
}

/* Style the checkmark/indicator */
.container .checkmark:after {
  left: 9px;
  top: 5px;
  width: 5px;
  height: 10px;
  border: solid white;
  border-width: 0 3px 3px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}
</style>

