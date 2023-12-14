import img1 from "@/assets/images/phoneimg.jpeg"
import img2 from "@/assets/images/iphone14img.png"
import logo from "@/assets/images/logo.png"
import { ref } from 'vue'

import { productStore } from "../../stores/product.js";
import {mapActions, mapState, mapWritableState} from "pinia"


  
export default {
  
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
    ...mapState(productStore, ["phones","products","showAll"])
  },
  methods : {
    ...mapActions(productStore,["addtocart","copy"]),

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
     }
  },
  mounted(){
    this.copy();
  }


}
