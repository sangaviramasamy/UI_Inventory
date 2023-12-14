import { useApiTestStore } from '@/stores/api-store'

import { productStore } from "../../stores/product.js";
import {mapActions, mapState, mapWritableState} from "pinia"


export default {
  mounted(){
console.log(this.$refs.input)
  },
    props : ['title'],
    emits : ['enlarge-text'],

    methods: {
        pageChange() {
          this.$router.push("/cart")
        },
        pageChange2() {
            this.$router.push("/")
          }

},
computed : {
  ...mapState(productStore, ["cart"])
},
}