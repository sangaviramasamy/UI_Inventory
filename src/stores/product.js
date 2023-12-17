import { defineStore } from "pinia";
// import productDetails from '@/api/test-api'


import ApiServices from '../services/ApiService.js'

import img1 from "@/assets/images/phoneimg.jpeg";
import img2 from "@/assets/images/iphone14img.png";
import img3 from "@/assets/images/bike.jpg";
import img4 from "@/assets/images/antivirus.png";
import img5 from "@/assets/images/toy1.jpg";
import img6 from "@/assets/images/cycle.png";
import img7 from "@/assets/images/electronics.jpg";
import img8 from "@/assets/images/fashion.png";
import img9 from "@/assets/images/gearedcyle.jpg";
import img10 from "@/assets/images/homes.png";
import img11 from "@/assets/images/mobile.jpg";
import img12 from "@/assets/images/printer.png";
import img13 from "@/assets/images/projectore.jpg";
import img14 from "@/assets/images/remote.jpg";
import img15 from "@/assets/images/travel.png";
import img16 from "@/assets/images/tyre.png";
import img17 from "@/assets/images/tyre.png";
import img18 from "@/assets/images/toys.png";

export const productStore = defineStore("product", {
  state: () => ({
    count: 0,
 
    cart: [],
    productList : [],
    product_info : [],
    showAll:true,
    filteredList: [],
    updateproductlist: []
  }),
  actions: {
    addtocart(product) {
      this.cart.push(product);
      console.log(this.cart);
      console.log(this.product);
    },
    clearCart() {
      this.cart = [];
    },
  
    filterProductStoreByCategory(category) {
       
      this.filteredProductsList = this.products.filter(product => {
        return product.category.name === category;
      });
      this.showAll = false;
      console.log("filtered products: ", this.filteredProductsList[0]);
      console.log("products: ", this. products[0]);

    },
    copyState() {
      this.filteredProductsList = JSON.parse(JSON.stringify(this.products));
    },
    setAll() {
      this.showAll = true;
      console.log("ShowAll" + this.showAll);
    },

    GET_ALL_PRODUCT(request) {
      console.log("inside the store")
      ApiServices.getAllProduct().then((data)=>{
         console.log(data);
        data.json().then(response => {
            console.log("product_info in stroe" + response);
            this.products = response;
        })
      },()=>{
        
      }).catch(e => {

      })

    },
    GET_PRODUCT_BYID(request) {
      console.log("updated id : " + request);

      ApiServices.getProductId(request).then((data)=>{
        data.json().then(response => {
          this.product_info = JSON.stringify(response, null, 2);
          console.log("product info in store" + this.product_info);
        })
      },()=>{
        
      }).catch(e => {

      })

    },

    async GET_PRODUCT_BYID(request) {
      console.log("updated id : " + request);
    
      try {
        const response = await ApiServices.getProductId(request);
        const data = await response.json();
        this.product_info = JSON.stringify(data, null, 2);
        console.log("product info in store" + this.product_info);
      } catch (error) {
        console.error("Error fetching product info:", error);
      }
    },

    async CREATE_ORDER(orderDetails){
      // console.log(orderDetails)
      const payload = orderDetails.payload
      const createOrderResponse = await ApiServices.createOrder(payload)
      console.log(createOrderResponse); 
      // const data = await createOrderResponse.json();

    },
    async ADD_PRODUCT(productDetails){
      console.log(productDetails)
    
      const payload = productDetails.payload
      const createProductResponse = await ApiServices.addProduct(payload)

      console.log(createProductResponse); 


    },
    async UPDATE_PRODUCT(productDetails){
      console.log("update" + productDetails)
    
      const payload = productDetails.payload
      const createProductResponse = ApiServices.updateProduct(payload)

      console.log("update" + createProductResponse); 


    } 
  },
});
