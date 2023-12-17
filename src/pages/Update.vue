<template>
   

       <div>
  <br><br><br>
  <div class="pro">
    <h2>Update Product</h2>
    
     
    <label for="productId">Product ID:</label>
    <input type="text" v-model="productId" required :placeholder="prod_id" readonly>

    <label for="productName">Product Name:</label>
    <input type="text" v-model="productName" required :placeholder="prod_name">

    <label for="productQuantity">Product Quantity:</label>
    <input type="number" v-model="productQuantity" required :placeholder="prod_quantity">

    <label for="productPrice">Product Price:</label>
    <input type="number" v-model="productPrice" required :placeholder="prod_price">

    <label for="categoryId">Category ID:</label>
    <input type="text" v-model="categoryId" required :placeholder="categoryId" readonly>

    <label for="categoryName">Category Name:</label>
    <input type="text" v-model="categoryName" required :placeholder="categoryName">


    <br><br>
    <button type="submit" class="btn" @click="formsubmits">Submit</button>
    <br><br>
  </div>
</div>
</template>
<script src="./js/update.js">
 
</script>
<style scoped>

.pro{
        padding-left: 72px;
    margin-right: 25%;
    border: 2px solid #ada7a7;
    border-radius: 12px;
    /* margin-bottom: 33px; */
    margin-left: 44%;
    box-shadow: 5px 10px #D8D4D4;
}
.btn{
        padding: 5px;
    /* height: 39%; */
    width: 29%;
    background-color: #e7e7e7;
    color: black;
    background-color: 88C894;
    margin-left: 30%;
}
 .pro {
    max-width: 495px; /* Set a maximum width for better readability */
    margin: auto; /* Center the form within its container */
  }

  label {
    display: block;
    margin-bottom: 8px;
  }

  input {
        border-color: #D8DBD5;
    border-radius: 5px;
    width: 80%;
    padding: 8px;
    box-sizing: border-box;
    margin-bottom: 16px;
  }

  button {
    background-color: #4CAF50;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }

  button:hover {
    background-color: #45a049;
  }
</style>
