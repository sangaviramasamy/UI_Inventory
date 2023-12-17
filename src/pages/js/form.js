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
    };
  },
  methods: {
    ...mapActions(productStore, ["ADD_PRODUCT"]),

    formsubmits() {
      console.log("Product Name:", this.productName);
      console.log("Product Quantity:", this.productQuantity);
      console.log("Product Price:", this.productPrice);
      console.log("Category ID:", this.categoryId);
      console.log("Category Name:", this.categoryName);

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
      this.ADD_PRODUCT(actions);
      this.$router.push("/");
      alert("Product Added")
    },
  },
};
