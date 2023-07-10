const WooCommerceRestApi = require("@woocommerce/woocommerce-rest-api").default;
// import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api"; // Supports ESM

const WooCommerce = new WooCommerceRestApi({
  url: 'http://localhost/wordpress',
  consumerKey: 'ck_ef43ba127bb756039da6f62d22a1e2b46e1d6b4b',
  consumerSecret: 'cs_93b8ad34a85fea3b369cc0d2672d2353e3f5d383',
  version: 'wc/v3'
});


WooCommerce.get("products")
  .then((response) => {
    console.log("Get All products")
    console.log(JSON.stringify(response.data, null, 2));
  })
  .catch((error) => {
    console.log(error.response.data);
  });

  
  
//   curl -X POST https://example.com/wp-json/wc/v3/products \
//     -u ck_ef43ba127bb756039da6f62d22a1e2b46e1d6b4b:cs_93b8ad34a85fea3b369cc0d2672d2353e3f5d383 \
//     -H "Content-Type: application/json" \
//     -d '{
//   "name": "Premium Quality",
//   "type": "simple",
//   "regular_price": "21.99",
//   "description": "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
//   "short_description": "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
//   "categories": [
//     {
//       "id": 9
//     },
//     {
//       "id": 14
//     }
//   ],
//   "images": [
//     {
//       "src": "http://demo.woothemes.com/woocommerce/wp-content/uploads/sites/56/2013/06/T_2_front.jpg"
//     },
//     {
//       "src": "http://demo.woothemes.com/woocommerce/wp-content/uploads/sites/56/2013/06/T_2_back.jpg"
//     }
//   ]
// }'