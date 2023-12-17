<template>
  <div
    class="layout small-layout"
    style="
      background-color: white;
      height: 55px;
      display: flex;
      align-items: center;
    "
  >
    <img
      src="@/assets/images/logo.png"
      alt="Logo"
      style="height: 50px; margin-right: 10px"
    />

    <div class="search-bar" style="margin-left: 70px">
      <div class="searchdiv">
        <input
          ref="input"
          type="text"
          placeholder="Search for products, brands, and more..."
        />
        <button type="submit" class="searchbtn">
          <i class="fa fa-search" style="font-size: 14px"></i>
        </button>
      </div>

      <span>
        <button
          class="menubtn"
          :class="{ active: activeMenu === 'login' }"
          @click="handleMenuClick('login')"
          style="margin-left: 140px"
        >
          Login <i class="fa fa-user" style="margin-left: 5px"></i>
        </button>

        <button
          class="menubtn"
          :class="{ active: activeMenu === 'product' }"
          @click="handleMenuClick('product')"
        >
          Product <i class="fa fa-th-list" style="margin-left: 5px"></i>
        </button>

        <button
          class="menubtn"
          :class="{ active: activeMenu === 'cart' }"
          @click="handleMenuClick('cart')"
        >
          Cart <i class="fa fa-shopping-cart" style="padding: 8px"></i>
            <span class="countbtn">
      {{cart.length}}
    </span>
        </button>

        <button
          class="menubtn"
          :class="{ active: activeMenu === 'addProduct' }"
          @click="handleMenuClick('addProduct')"
        >
          Add Product <i class="fa fa-plus-circle" style="margin-left: 5px"></i>
        </button>
      </span>
    </div>
  </div>
</template>
<script src="./js/header.js"></script>
<style lang="scss" scoped>
@import "@blibli/blue-design-tokens/dist/tokens-default.scss";
body {
  margin: 0;
  font-family: Arial, sans-serif;
  background-color: whitesmoke;
}
.searchbtn {
  position: absolute;
  left: -9%;
  top: 45%;
  border: none;
  background-color: white;
}
input {
  border-color: #cdd2ce;
  width: 585px;
  margin-top: 12px;
  margin-left: -10%;
  border-radius: 9px;
  height: 35px;
  padding-left: 35px;
}
.searchdiv {
  position: relative;
  display: inline-block;
  margin-bottom: 2%;
}
.menubtn {
  margin: 15px;
  background-color: white;
  border: none;
  border-color: white;
  font-size: 16px;
   cursor: pointer;
}
.menubtn.active {
      padding: 15px;
    background-color: #CDD2CE;
    color: black;
}
.countbtn{
  position: relative;
    top: -10px;
    right: 16%;
    background-color: black;
    color: white;
    padding: 2px 6px;
    border-radius: 100%;
}
</style>
