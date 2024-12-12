const app = Vue.createApp({
     data() {
          return {
               product: 'Socks',
               details: ["50% cotton", "30% wool", "20% polyester"],
               selectedVariant: 0,
               variants: [
                    {id: 2234, color: "green", image: './assets/images/socks_green.jpg', quantity: 50 },
                    {id: 2235, color: "blue", image: './assets/images/socks_blue.jpg', quantity: 0}
               ],
               cart: 0,
               brand: "Vue Mastery"
          }
     },
     methods: {
          addToCart() {
               this.cart++;
          },
          updateVariant(index) {
               this.selectedVariant = index;
               console.log(this.variants[this.selectedVariant].image);
          }
     },
     computed: {
          title() {
               return this.brand + " " + this.product
          },
          image() {
               
               return this.variants[this.selectedVariant].image;
          },
          inStock() {
               return this.variants[this.selectedVariant].quantity;
          } 
     }
})
