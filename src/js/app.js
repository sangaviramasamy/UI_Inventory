import img1 from "@/assets/images/phoneimg.jpeg"
import img2 from "@/assets/images/iphone14img.png"
import logo from "@/assets/images/logo.png"
import { ref } from 'vue'
import sample from "../components/Header.vue"
import filtercomponent from "../components/Filter.vue"
import productcomponent from "../components/Product.vue"


export default {
  
  components: {
    sample,
    filtercomponent,
    productcomponent
  },
  data() {
    const checkedNames = ref([])
    const picked = ref('One')
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
      img1,
      img2,
      logo,
      checkedNames,
      selected,
      phones

    }
  },
  methods: {
    formatPrice(price) {
      // Implement a method to format the price as needed
      // For example, you can add currency symbols, decimals, etc.
      // Replace this with your actual implementation.
      return `$${(price / 100).toFixed(2)}`;
    },
    alertfun(msg1,msg2){
      alert(msg1 + msg2)
    }
  },



}
