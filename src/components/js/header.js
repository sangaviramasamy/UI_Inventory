import { useApiTestStore } from "@/stores/api-store";

import { productStore } from "../../stores/product.js";
import { mapActions, mapState, mapWritableState } from "pinia";

export default {
  data(){
    return{
      activeMenu: 'product'
    }
  },
  mounted() {
    console.log(this.$refs.input);
  },
  props: ["title"],
  emits: ["enlarge-text"],

  methods: {
    handleMenuClick(menuName) {
      this.activeMenu = menuName;
      if (menuName === 'login') {
      } else if (menuName === 'product') {
        this.pageChange2();
      } else if (menuName === 'cart') {
        this.pageChange();
      } else if (menuName === 'addProduct') {
        this.pageChange3();
      }
    },
    pageChange() {
      this.$router.push("/cart");
    },
    pageChange2() {
      this.$router.push("/");
    },
    pageChange3() {
      this.$router.push("/form");
    },
  },
  computed: {
    ...mapState(productStore, ["cart"]),
  },
};
