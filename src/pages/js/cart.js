import { productStore } from "../../stores/product.js";
import {mapActions, mapState, mapWritableState} from "pinia"

export default {
    computed : {
        ...mapState(productStore, ["cart"])
      },
    methods : {
        ...mapActions(productStore,["clearCart"]),
        cart_clear(){
            this.clearCart();
        }
    }
}