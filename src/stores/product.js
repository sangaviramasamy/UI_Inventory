import { defineStore } from "pinia";
// import productDetails from '@/api/test-api'
import img1 from "@/assets/images/phoneimg.jpeg";
import img2 from "@/assets/images/iphone14img.png";
import img3 from "@/assets/images/bike.jpg";
import img4 from "@/assets/images/antivirus.png";
import img5 from "@/assets/images/toy1.jpg";
import img6 from "@/assets/images/cycle.png";
import img7 from "@/assets/images/electronics.jpg";
import img8 from "@/assets/images/fashion.png";
import img9 from "@/assets/images/gearedcyle.jpg";
import img10 from "@/assets/images/homes.png";
import img11 from "@/assets/images/mobile.jpg";
import img12 from "@/assets/images/printer.png";
import img13 from "@/assets/images/projectore.jpg";
import img14 from "@/assets/images/remote.jpg";
import img15 from "@/assets/images/travel.png";
import img16 from "@/assets/images/tyre.png";
import img17 from "@/assets/images/tyre.png";
import img18 from "@/assets/images/toys.png";

export const productStore = defineStore("product", {
  state: () => ({
    count: 0,
    phones: [
      {
        id: 3,
        productName: "Google Pixel 7 (64 GB)",
        img: img2,
        price: 123002,
        quantity: 1,
        features: [
          { id: "one", description: "Advanced Camera Technology" },
          { id: "two", description: "Fast Processor" },
          { id: "three", description: "OLED Display" },
          { id: "four", description: "5G Connectivity" },
          { id: "five", description: "Compact Design" },
        ],
      },
    ],
    products: [
      {
        id: 1,
        productName: "APPLE iPhone 14 (128 GB)",
        img: img1,
        price: 12345,
        quantity: 1,
        category: "One",
      },
      {
        id: 2,
        productName: "Samsung Galaxy S22 (256 GB)",
        img: img2,
        price: 1234500,
        quantity: 1,
        category: "One",
      },
      {
        id: 3,
        productName: "Google Pixel 7 (64 GB)",
        img: img3,
        price: 123002,
        quantity: 1,
        category: "One",
      },
      {
        id: 4,
        productName: "Sony Xperia XZ4 (128 GB)",
        img: img4,
        price: 89999,
        quantity: 1,
        category: "One",
      },
      {
        id: 5,
        productName: "OnePlus 9 Pro (256 GB)",
        img: img5,
        price: 78999,
        quantity: 1,
        category: "Two",
      },
      {
        id: 6,
        productName: "Xiaomi Mi 11 (128 GB)",
        img: img6,
        price: 58999,
        quantity: 1,
        category: "Two",
      },
      {
        id: 7,
        productName: "Huawei P50 (256 GB)",
        img: img7,
        price: 99999,
        quantity: 1,
        category: "Two",
      },
      {
        id: 8,
        productName: "LG G8 ThinQ (64 GB)",
        img: img8,
        price: 54999,
        quantity: 1,
        category: "Two",
      },
      {
        id: 9,
        productName: "Motorola Edge+ (128 GB)",
        img: img9,
        price: 67999,
        quantity: 1,
        category: "Three",
      },
      {
        id: 10,
        productName: "Asus ROG Phone 6 (256 GB)",
        img: img10,
        price: 109999,
        quantity: 1,
        category: "Three",
      },
      {
        id: 11,
        productName: "Nokia 9 PureView (128 GB)",
        img: img11,
        price: 45999,
        quantity: 1,
        category: "Three",
      },
      {
        id: 12,
        productName: "BlackBerry KEY3 (64 GB)",
        img: img12,
        price: 79999,
        quantity: 1,
        category: "Three",
      },
      {
        id: 13,
        productName: "HTC U13+ (128 GB)",
        img: img13,
        price: 66999,
        quantity: 1,
        category: "Two",
      },
      {
        id: 14,
        productName: "Oppo Find X4 Pro (256 GB)",
        img: img14,
        price: 119999,
        quantity: 1,
        category: "Two",
      },
    ],
    cart: [],
    showAll:true,
    filteredList: [],
  }),
  actions: {
    addtocart(product) {
      this.cart.push(product);
      console.log(this.cart);
      console.log(this.product);
    },
    clearCart() {
      this.cart = [];
    },
    copy() {
      this.filteredList = JSON.parse(JSON.stringify(this.products));
    },
    filterproduct(category) {
      //console.log(category);
      // if (category === "one") {
      //   alert("hy");
      // }
      this.showAll=false;
      this.filteredList = this.products.filter(
        (product) => product.category === category
      );
      console.log(this.filteredList);
    },
  },
});
