import { productStore } from "../../stores/product.js";
import { mapActions, mapState } from "pinia";

export default {
  data() {
    return {
      productId: null,
      productName: null,
      productQuantity: null,
      productPrice: null,
      categoryId: null,
      categoryName: null,
      productId: '',
    productName: '',
    productQuantity: 0,
    productPrice: 0,
    categoryId: '',
    categoryName: '',
    };
  },computed : {
    ...mapState(productStore, ["product_info","products"]),
     
  },
   
  methods: {
    ...mapActions(productStore, ["UPDATE_PRODUCT","GET_PRODUCT_BYID"]),

    formsubmits() {
    console.log("product_info in update" + this.product_info);

      const productRequest = {
        id: this.productId,
        name: this.productName,
        price: this.productPrice,
        quantity: this.productQuantity,
        category: {
          id: this.categoryId,
          name: this.categoryName,
        },
      };
      console.log(productRequest);
      const actions = {
        payload: productRequest,
      };
      this.UPDATE_PRODUCT(actions);
      this.$router.push("/");
      alert("Product Updated")
    },
  },
  async mounted(){
    const id = this.$route.params.id;
    this.GET_PRODUCT_BYID(id);
     

    this.products.forEach(product => {
      console.log(product.id + " " + id)
      if (product.id == id) {
        this.productId = product.id;
        this.productName = product.name;
        this.productQuantity = product.quantity;
        this.productPrice = product.price;
        this.categoryId = product.category.id;
        this.categoryName = product.category.name;
        for (const key in product.category) {
          console.log("category name" + key + ': ' + product.category[key]);
        }
    
        // Break out of the loop since you've found the target product
        return;
      }
    });
  }
};
