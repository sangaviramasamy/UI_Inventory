import { productStore } from "../../stores/product.js";
import {mapActions, mapState, mapWritableState} from "pinia"
import img1 from "@/assets/images/phoneimg.jpeg"

export default {
    data(){
        return{
            img1
        }
    },
    computed : {
        ...mapState(productStore, ["cart"])
      },
    methods : {
        ...mapActions(productStore,["clearCart","CREATE_ORDER"]),
        cart_clear(){
            this.clearCart();
        },
        placeorder(){
                
                const cartRequest = {
                    orderId:this.cart[0].id,
                    orderDate:"15/12/2023",
                    productId:this.cart[0].id,
                    productQuantity:this.cart[0].quantity
                }
                console.log(cartRequest);
                const actions = {
                    "payload" : cartRequest
                }
                this.CREATE_ORDER(actions)
                console.log(this.cart)
                alert("Order Placed")
                this.$router.push("/");
                this.clearCart();
            
        }
    },
     
}