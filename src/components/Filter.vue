<template>
  <div class="filters" style="background-color: white">

<hr>
    <h4 style="margin: 0">BRANDS</h4>

    <div>
      <div v-for="category in categories" :key="category">
        <input type="radio" :value="category" v-model="selectedCategory" />
        {{ category }}
      </div>
    </div>

    <br />

<hr>
    <div style="display: flex; align-items: center;">
  <h4 style="margin: 0; margin-right: 10px;">FILTERS</h4>
  <button @click="clearFilters" class="delbtn" style="margin-left: 45%;">
    <i class="material-icons" style="font-size: 23px;">delete</i>
  </button>
</div>


    <!-- <br />
    <div>{{ checkedNames }}</div> -->
    <br />
    <div>{{ selectedCategory }}</div>
    <br />
    <hr>
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

.filters {
  float: left;
  padding: 20px;
  border-right: 1px solid #ddd;
  width: 225px;
  height: 958px;
}
.delbtn {
  float: right;
  border: none;
  background-color: white;
  margin-left: 10px;
  algin: right;
}
</style>
