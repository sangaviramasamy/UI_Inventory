<template>
  <div class="filters" style="background-color: white">
    <h2 style="padding-bottom: 7px; margin-bottom: 2px">Filters</h2>
    <h4 style="margin: 0">Brands</h4>
    <div>{{ checkedNames }}</div>

    <input type="checkbox" id="APPLE" value="APPLE" v-model="checkedNames" />
    <label for="APPLE">APPLE</label><br />

    <input type="checkbox" id="SAMSAN" value="SAMSAN" v-model="checkedNames" />
    <label for="SAMSAN">SAMSAN</label><br />

    <input type="checkbox" id="iPhone" value="iPhone" v-model="checkedNames" />
    <label for="iPhone">iPhone</label><br />

    <input type="checkbox" id="MOTO" value="MOTO" v-model="checkedNames" />
    <label for="MOTO">MOTO</label><br /><br />

    <h4 style="margin: 0">Price Range</h4>
    <div>Picked: {{ picked }}</div>

    <input type="radio" id="one" value="One" v-model="picked"  @click="filterproducts"/>
    <label for="one">30000 - 40000</label><br />
    <input type="radio" id="two" value="Two" v-model="picked" @click="filterproducts"/>
    <label for="two">40000 - 50000</label><br />
    <input type="radio" id="three" value="Three" v-model="picked" @click="filterproducts"/>
    <label for="three">50000 - 60000</label><br />
    <input type="radio" id="four" value="Four" v-model="picked" @click="filterproducts"/>
    <label for="four">60000 - 100000</label><br />
    <br>
    <!-- <button @click="filters(picked)">Filter</button> -->

    <h4>Colour : {{ selected }}</h4>

    <select v-model="selected">
      <option disabled value="">Please select one</option>
      <option>Red</option>
      <option>Orange</option>
      <option>Black</option>
      <option>White</option>
      <option>Brown</option>
      <option>Yellow</option>
    </select>

    <br /><br />
    <h4 style="margin: 0">RAM</h4>

    <input type="checkbox" id="one" value="one" v-model="checkedNames" />
    <label for="one">1 GB</label><br />

    <input type="checkbox" id="two" value="two" v-model="checkedNames" />
    <label for="two">2 GB</label><br />

    <input type="checkbox" id="three" value="three" v-model="checkedNames" />
    <label for="three">3 GB</label><br />

    <input type="checkbox" id="four" value="four" v-model="checkedNames" />
    <label for="four">4 - 8 GB</label><br /><br />
  </div>
</template>
<script src="./js/filter.js"></script>
<style lang="scss" scoped>
@import "@blibli/blue-design-tokens/dist/tokens-default.scss";
body {
  margin: 0;
  font-family: Arial, sans-serif;
  background-color: whitesmoke;
}
input {
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
li {
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
  background-color: #2196f3;
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
