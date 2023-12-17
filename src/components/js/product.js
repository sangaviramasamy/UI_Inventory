import img1 from "@/assets/images/phoneimg.jpeg"
import img2 from "@/assets/images/iphone14img.png"
import logo from "@/assets/images/logo.png"
import { ref } from 'vue'

import { productStore } from "../../stores/product.js"


import {mapActions, mapState} from "pinia"


  
export default {

  data(){
    return{
      img1
    }
  },
  watch: {
    'product.quantity'(){
      console.log("inside watch");
    }
  },
  methods: {
    formatPrice(price) {
       
      return `$${(price / 100).toFixed(2)}`;
    }
  },
  computed : {
    ...mapState(productStore, ["phones","products","showAll","productList","updateproductlist","filteredProductsList"]),
     
  },
  methods : {
    ...mapActions(productStore,["addtocart","copy","GET_ALL_PRODUCT"]),

    increments(index){
       this.products[index].quantity++;
       
    },
    decrements(index){
      if(this.products[index].quantity > 0){
      this.products[index].quantity--;
    }
    },
    addings(index){

      this.phones.push(this.products[index]);
      console.log(phones[index]);
     },
     Update(index){
        // console.log("index " + index)
        const id = this.products[index].id;
        this.$router.push({name:'update',params: {id}});
        // this.$router.push("/update");
     }
  },
  mounted() {
    this.GET_ALL_PRODUCT();
  } 


}
