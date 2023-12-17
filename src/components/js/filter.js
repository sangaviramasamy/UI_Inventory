import img1 from "@/assets/images/phoneimg.jpeg"
import img2 from "@/assets/images/iphone14img.png"
import logo from "@/assets/images/logo.png"
import { ref } from 'vue'
import { productStore } from "../../stores/product.js";
import {mapActions, mapState, mapWritableState} from "pinia"
import product from "./product.js";
export default {
   
  data() {
    
    const checkedNames = ref([])
    const selected = ref('')
    const phones = [
      {
        id: 1,
        productName: 'APPLE iPhone 14 (128 GB)',
        img: img1,
        price: 12345,
        features: [
          { id: 'one', description: 'Improved Camera' },
          { id: 'two', description: 'Faster Processor' },
          { id: 'three', description: 'Enhanced Display' },
          { id: 'four', description: '5G Connectivity' },
          { id: 'five', description: 'Slimmer Design' }
        ]
      },
      {
        id: 2,
        productName: 'Samsung Galaxy S22 (256 GB)',
        img: img2,
        price: 1234500,
        features: [
          { id: 'one', description: 'High-Resolution Camera' },
          { id: 'two', description: 'Powerful Processor' },
          { id: 'three', description: 'AMOLED Display' },
          { id: 'four', description: '5G Connectivity' },
          { id: 'five', description: 'Sleek Design' }
        ]
      },
      {
        id: 3,
        productName: 'Google Pixel 7 (64 GB)',
        img: img2,
        price: 123002,
        features: [
          { id: 'one', description: 'Advanced Camera Technology' },
          { id: 'two', description: 'Fast Processor' },
          { id: 'three', description: 'OLED Display' },
          { id: 'four', description: '5G Connectivity' },
          { id: 'five', description: 'Compact Design' }
        ]
      }
    ];
    return {
      categories: [
        "iPhone",
        "Oppo",
        "Moto",
        "RealMe"
      ],
      selectedCategory: [],

      img1,
      img2,
      logo,
      checkedNames,
      selected,
      phones,
      picked: 0

    }
  },
  watch: {

    selectedCategory(newCategory, oldCategory) {
      this.filterProductStoreByCategory(newCategory,product);
    },
  },
  methods: {
    ...mapActions(productStore, ["filterProductStoreByCategory", "setAll"]),

    formatPrice(price) {
      return `$${(price / 100).toFixed(2)}`;
    },
    filterproducts(){
      this.filterproduct(this.picked)
    },
    clearFilters(){
      this.selectedCategory = null;
      //After the next DOM update, execute this code
      this.$nextTick(() => {
        this.setAll();
      });
      
    }

  } 



}
